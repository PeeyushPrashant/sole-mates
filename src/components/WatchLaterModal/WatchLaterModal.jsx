
import "./WatchLaterModal.css";
import { useState } from "react";
import { PlayListModal } from "../PlayListModal/PlayListModal";

export const WatchLaterModal=({addToWatchlater,isInWatchLater,openPlayListModal})=>{

    return (
        <div className="watch-modal flex-col">
           <div className="watch-modal-option flex-row"
           onClick={addToWatchlater}
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
           <div className="watch-modal-option flex-row"
           onClick={openPlayListModal}
           >
           <i className="fas fa-play-circle"></i>
           <p>Add to Playlist</p>
           </div>
        </div>

    )
}