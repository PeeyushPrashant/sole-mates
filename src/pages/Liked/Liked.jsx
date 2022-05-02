import { NavBar,Aside,VideoCard } from "../../components";
import { useData } from "../../contexts";
import { useNavigate } from "react-router-dom";

export const Liked=()=>{
    const {state}= useData();
    const navigate=useNavigate();
    const likedArray=state.liked;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main flex-row">
              {likedArray.length<1 &&
              <div className="message-container flex-col">
              <p className="message">Looks like you haven't liked anything yet</p>
              <button className="cta-button" onClick={()=>navigate("/")}>Start adding now</button>
            </div>
              }
            {likedArray.length>0 && <section className="videos-container">
              {likedArray.map((item)=>{
                return(
                <VideoCard
                key={item._id}
                item={item}
                />
                )
              })}
              </section>}
            </div>
        </main>
        </>
    )
}