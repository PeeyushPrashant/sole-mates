import { PlayListFolder } from "./components/PlayListFolder";
import { NavBar,Aside } from "../../components";
import { useData } from "../../contexts";

export const PlayList=()=>{
    const {state}= useData();
    const playListArray= state.playlists;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main">
            <section className="videos-container">
              {playListArray.map((item)=>{
                return(
                <PlayListFolder
                key={item._id}
                item={item}
                />
                )
              })}
              </section>
            </div>
        </main>
        </>
    )

}