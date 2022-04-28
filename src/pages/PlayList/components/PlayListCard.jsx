import "../PlayList.css";
import { useNavigate } from "react-router-dom";
import { useData,useAuth } from "../../../contexts";
import { useState } from "react";
import {removeVideoFromPlayList,HistoryHandler} from "../../../utils"

export const PlayListCard=({item,playListId})=>{
    const navigate= useNavigate();
    const [modal,setModal]=useState(false);
    const {dispatch}= useData();
    const {token} = useAuth()
    const modalHandler=()=>{
        setModal((curr)=>!curr)
    }
    const {_id,image,title,creator,date} = item || {};
    return(
        <div className="card video-card">
        <section
        onClick={()=>{
          navigate(`/video/${_id}`)
          HistoryHandler(item,token,dispatch)
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
        {modal && <div className="remove-playlist flex-row"
        onClick={()=>removeVideoFromPlayList(playListId,_id,token,dispatch)}
        >
            <i className="far fa-trash-alt"></i>
            <p>Remove From Playlist</p>
            </div>}
        
      </div>
    )
}