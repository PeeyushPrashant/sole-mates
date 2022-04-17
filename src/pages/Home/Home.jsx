
import { NavBar,Aside } from "../../components";
import { useData } from "../../contexts/data-context";
import { VideoCard } from "../../components/VIdeoCard/VideoCard";

export const Home=()=>{
    const {state}= useData();
    const videoArray= state.videos;
    return (
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main">
              {videoArray.map((item)=>{
                  return (
                     <VideoCard 
                     key={item._id}
                     item={item}
                     />
                  )
              })}
            </div>
        </main>
        </>
    )
}