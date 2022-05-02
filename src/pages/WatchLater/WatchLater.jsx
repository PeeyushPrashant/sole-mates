import {NavBar,Aside,VideoCard} from "../../components"
import { useData } from "../../contexts";


export const WatchLater=()=>{
    const {state}= useData();
    const watchLaterArray=state.watchlater;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main">
            <section className="videos-container">
              {watchLaterArray.map((item)=>{
                return(
                <VideoCard
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