import "./VideoCard.css";
import { useNavigate } from "react-router-dom";

export const VideoCard=({item})=>{
    const {image,title,creator,date,_id}=item || {};
    const navigate=useNavigate();
    return (
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
          <div><i class="fas fa-ellipsis-v icon-sm"></i></div>
        </div>
        <footer className="video-card-footer flex-row">
          <p className="creator">{creator}</p>
          <p>
            <small>{date}</small>
          </p>
        </footer>
      </div>
   
    )
}