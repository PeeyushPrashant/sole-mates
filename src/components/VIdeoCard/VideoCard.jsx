import "./VideoCard.css";

export const VideoCard=({item})=>{
    const {image,title,creator,date}=item || {};
    return (
      <div className="card video-card">
        <section>
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