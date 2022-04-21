import "./VideoCard.css";
import {useState} from "react";
import { useAuth, useData } from "../../contexts";

import {WatchLaterModal} from "../WatchLaterModal/WatchLaterModal"
import { useNavigate } from "react-router-dom";
import { WatchLaterHandler } from "../../utils";

export const VideoCard=({item})=>{
    const {image,title,creator,date,_id}=item || {};
    const navigate=useNavigate();
    const {token}= useAuth();
    const {state,dispatch}= useData();
    const [modal,setModal]= useState(false);
    const isInWatchLater=state.watchlater.some((ele)=>ele._id ===_id)
    const modalHandler=()=>{
      setModal((curr)=>!curr)
    }
    return (
      <>
      <div className="card video-card">
        <section
        onClick={()=>navigate(`/video/${_id}`)}
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
        {modal && <WatchLaterModal 
        isInWatchLater={isInWatchLater}
        addToWatchlater={!token?()=>navigate("/login"):()=>WatchLaterHandler(item,token,dispatch,isInWatchLater)}
        />}
      </div>
      
      </>
    )
}