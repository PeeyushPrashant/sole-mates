import { useData,useAuth } from "../../../contexts"
import {useNavigate} from "react-router-dom"
import {removePlayList} from "../../../utils"
import "../PlayList.css"

export const PlayListFolder=({item})=>{
    const {title,videos,_id}=item || {};
    const navigate =useNavigate();
    const {dispatch}=useData();
    const {token}=useAuth();
    return(
        <div className="card playlist-card">
        <section
        className="thumbnail-container relative"
        onClick={()=>navigate(`/playlist/${_id}`)}
        >
          <img
            src={videos[0]?.image}
            alt="thumbnail"
            className="thumbnail"
          />
          <div className="video-count flex-row">
          <i className="fas fa-play-circle icon-md"></i>
          <p className="num-of-videos">{videos.length}</p>
          </div>
        </section>
        <footer className="video-card-footer flex-row">
          <p className="creator">{title}</p>
          <div className="delete-playlist"
           onClick={()=>removePlayList(_id,token,dispatch)}
          >
          <i className="fas fa-trash-alt icon-sm "></i>
          </div>
        </footer>
      </div>
    )
}