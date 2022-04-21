import {NavBar,Aside} from "../../components"
import { useData } from "../../contexts/data-context";
import { VideoCard } from "../../components";

export const WatchLater=()=>{
    const {state}= useData();
    const watchLaterArray=state.watchlater;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main">
              {watchLaterArray.map((item)=>{
                return(
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