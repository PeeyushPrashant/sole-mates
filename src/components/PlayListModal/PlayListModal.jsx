import { useState } from "react";
import { PlaylistHandler,addVideoToPlayList } from "../../utils";
import { useAuth,useData } from "../../contexts";
import "./PlayListModal.css";

export const PlayListModal=({closePlayListModal,item})=>{
    const [playlistName,setPlayListName]= useState("");
    const {token} = useAuth();
    const {state,dispatch} = useData();
    const playlistArray=state.playlists;
    return (
        <main className="backdrop ">
           <div className="playlist-modal flex-col">
               <header className="modal-heading flex-row">
                   <h4 className="h4-tag">Save to</h4>
                   <div className="cross-icon"
                    onClick={closePlayListModal}
                   ><i className="fas fa-times"></i></div>
               </header>
               
                   {playlistArray.map((ele)=>{
                     const isInPlayList=ele.videos?.some((el)=>el._id===item._id);
                       return(
                           <div className="playlist flex-row" key={ele._id}>
                             <input type="checkbox" 
                             checked={isInPlayList}
                             onChange={(e)=>e.target.checked?
                             addVideoToPlayList(ele._id,item,token,dispatch):""
                             }
                             />
                             <p>{ele.title}</p>
                           </div>
                       )
                   })}
               
               <section className="playlist-input flex-row">
                   <h4 className="h4-tag">Name:</h4>
                    <input type="text" className="playlist-name"
                    value={playlistName}
                    onChange={(e)=>setPlayListName(e.target.value)}
                    />
               </section>
               <footer>
                   <button className="btn create-playlist-btn"
                   onClick={()=>{
                       playlistName?PlaylistHandler(token,playlistName,dispatch):setPlayListName("")
                       setPlayListName("");
                   }}
                   >Create New Playlist</button>
               </footer>
           </div>
        </main>
    )
}