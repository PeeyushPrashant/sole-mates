import { PlayListFolder } from "./components/PlayListFolder";
import { NavBar,Aside } from "../../components";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts";

export const PlayList=()=>{
    const {state}= useData();
    const navigate= useNavigate();
    const playListArray= state.playlists;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main flex-row">
            {playListArray.length<1 && 
            <div className="message-container flex-col">
              <p className="message">Looks like you haven't created any playlist</p>
              <button className="cta-button" onClick={()=>navigate("/")}>Start creating now</button>
            </div>
            }
            {playListArray.length>0 && <section className="videos-container">
              {playListArray.map((item)=>{
                return(
                <PlayListFolder
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