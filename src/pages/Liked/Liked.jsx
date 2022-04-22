import { NavBar,Aside,VideoCard } from "../../components";
import { useData } from "../../contexts";


export const Liked=()=>{
    const {state}= useData();
    const likedArray=state.liked;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main">
              {likedArray.map((item)=>{
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