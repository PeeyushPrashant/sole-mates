import { useData,useAuth } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { WatchLaterHandler,removeFromHistory } from "../../utils";
import { PlayListModal } from "../../components";
import { useState } from "react";
import "./History.css"

export const HistoryCard=({item})=>{
    const {_id,image,title,creator,date,}= item;
    const navigate= useNavigate();
    const {token} = useAuth();
    const {state,dispatch}=useData();
    const [modal,setModal]= useState(false);
    const [playListModal, setPlaylistModal] = useState(false);
    const isInWatchLater=state.watchlater.some((ele)=>ele._id ===_id);
    const modalHandler=()=>{
        setModal((curr)=>!curr)
      }
      const openPlayListModal=()=>{
        setModal(false);
        setPlaylistModal(true);
      }
      const closePlayListModal=()=>{
        setPlaylistModal(false);
      }
    return(
        <>
        <div className="card video-card">
          <section
          onClick={()=>{
            navigate(`/video/${_id}`)
           
          }}
          >
            <img
              src={image}
              alt="thumbnail"
              className="thumbnail"
            />
          </section>
          <div className="title-container flex-row">
            <div className="video-title">
              {title}
            </div>
            <div className="ellipse"
            onClick={modalHandler}
            ><i className="fas fa-ellipsis-v icon-sm"></i></div>
          </div>
          <footer className="video-card-footer flex-row">
            <p className="creator">{creator}</p>
            <p>
              <small>{date}</small>
            </p>
          </footer>
          {modal && 
          <div className="history-modal flex-col">
          <div className="watch-modal-option flex-row"
          onClick={()=>WatchLaterHandler(item,token,dispatch,isInWatchLater)}
          >
           {isInWatchLater?
           <div className="remove-watch flex-row">
           <i className="far fa-trash-alt"></i>
           <p>Remove From Watch Later</p>
           </div>:
           <>
           <i className="far fa-clock"></i>
          <p>Add to Watch Later</p>
           </>
            } 
          </div>
          <div className="watch-modal-option remove-history flex-row"
          onClick={()=>removeFromHistory(_id,token,dispatch)}
          >
          <i className="far fa-trash-alt"></i>
          <p>Remove from history</p>
          </div>
          <div className="watch-modal-option flex-row"
          onClick={openPlayListModal}
          >
          <i className="fas fa-play-circle"></i>
          <p>Add to Playlist</p>
          </div>
       </div>
          }

        {playListModal && <PlayListModal
        item={item}
        closePlayListModal={closePlayListModal}
        />}
        </div>
        </>
    )
}