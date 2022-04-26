import {NavBar,Aside} from "../../../components"
import { useParams } from "react-router-dom"
import { useData } from "../../../contexts";
import { PlayListCard } from "./PlayListCard";

export const PlayListVideos=()=>{
    const {state}= useData();
    const {playlistId}= useParams();
    const element= state.playlists.find((item)=>item._id===playlistId);
    const {videos}=element;
  return (
    <>
    <NavBar/>
    <main className="main-cont flex-row">
        <Aside/>
        <div className="right-main">
          {videos.map((item)=>{
            return(
            <PlayListCard
            key={item._id}
            item={item}
            playListId={element._id}
            />
            )
          })}
        </div>
    </main>
    </>
  )
}