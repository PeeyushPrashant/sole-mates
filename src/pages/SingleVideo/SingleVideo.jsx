import { useParams } from "react-router-dom"
import { useData } from "../../contexts/data-context"
import {NavBar,Aside} from "../../components"
import "./SingleVideo.css"

export const SingleVideo=()=>{
    const {state}= useData();
    const videoArray= state.videos;
    const {videoId}=useParams();
    const video= videoArray.find((item)=>item._id===videoId) || {};
    const {src,title,creator,description}= video;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
              <div className="single-video-cont flex-col">
                 <iframe 
                 src={src} 
                 width='100%'
                height='70%'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen=''
                 ></iframe>

                <section className="title-cont flex-col">
                 <h2 className="vid-title">{title}</h2>
                  <p>{creator}</p>
                </section>
                <section className="chips-container flex-row">
                    <div className="chips flex-row">
                    <i class="far fa-thumbs-up"></i>
                     <p>Like</p>
                    </div>
                    <div className="chips flex-row">
                    <i class="far fa-clock"></i>
                    <p>Watch Later</p>
                    </div>
                    <div className="chips flex-row">
                    <i class="far fa-copy"></i>
                    <p>Copy</p>
                    </div>
                    <div className="chips flex-row">
                    <i class="far fa-play-circle"></i>
                    <p>Save</p>
                    </div>
                </section>
                <footer className="vid-description flex-col">
                   <h4>Description :</h4>
                   <p>{description}</p>
                </footer>
              </div>
           
        </main>
        </>
    )
}