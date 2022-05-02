import { useParams } from "react-router-dom"
import { useData,useAuth } from "../../contexts"
import { useNavigate } from "react-router-dom";
import {NavBar,Aside,PlayListModal} from "../../components"
import { WatchLaterHandler,LikedHandler } from "../../utils";
import "./SingleVideo.css"
import { useState } from "react";

export const SingleVideo=()=>{
    const [playListModal,setPlaylistModal]=useState(false);
    const {state,dispatch}= useData();
    const {token} = useAuth();
    const navigate= useNavigate();
    const videoArray= state.videos;
    const {videoId}=useParams();
    const video= videoArray.find((item)=>item._id===videoId) || {};
    const {src,title,creator,description,_id}= video;
    const isInWatchLater= state.watchlater.some((ele)=>ele._id===_id);
    const isInLiked= state.liked.some((ele)=>ele._id===_id);
    const openPlayListModal=()=>{
        setPlaylistModal(true);
      }
    const closePlayListModal=()=>{
        setPlaylistModal(false);
    }

    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
              <div className="single-video-cont flex-col">
                 <iframe 
                 src={src} 
                width='100%'
                // height='70%'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen=''
                className="iframe-height"
                 ></iframe>

                <section className="title-cont flex-col">
                 <h2 className="vid-title">{title}</h2>
                  <p>{creator}</p>
                </section>
                <section className="chip-container flex-row">
                    <div className={isInLiked?"chip-active flex-row": "chip flex-row"}
                    onClick={!token?()=>navigate("/login"):()=>LikedHandler(video,token,dispatch,isInLiked)}
                    >
                    <i class="far fa-thumbs-up"></i>
                     <p>{isInLiked?"Liked": "Like"}</p>
                    </div>
                    <div className={isInWatchLater?"chip-active flex-row": "chip flex-row"}
                    onClick={!token?()=>navigate("/login"):()=>WatchLaterHandler(video,token,dispatch,isInWatchLater)}
                    >
                    <i class="far fa-clock"></i>
                    <p>Watch Later</p>
                    </div>
                    <div className="chip flex-row">
                    <i class="far fa-copy"></i>
                    <p>Copy</p>
                    </div>
                    <div className="chip flex-row"
                    onClick={!token?()=>navigate("/login"):openPlayListModal}
                    >
                    <i class="far fa-play-circle"></i>
                    <p>Save</p>
                    </div>
                </section>
                <footer className="vid-description flex-col">
                   <h4>Description :</h4>
                   <p>{description}</p>
                </footer>
                {playListModal && <PlayListModal
               item={video}
              closePlayListModal={closePlayListModal}
          />}
              </div>
             
        </main>
        </>
    )
}