import {NavBar,Aside,VideoCard} from "../../components"
import { useData } from "../../contexts";
import { useNavigate } from "react-router-dom";

export const WatchLater=()=>{
    const {state}= useData();
    const navigate= useNavigate();
    const watchLaterArray=state.watchlater;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main flex-row">
              {watchLaterArray.length<1 && 
              <div className="message-container flex-col">
              <p className="message">Looks like you haven't added anything yet</p>
              <button className="cta-button" onClick={()=>navigate("/")}>Start adding now</button>
            </div>
              }

            {watchLaterArray.length>0 && <section className="videos-container">
              {watchLaterArray.map((item)=>{
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