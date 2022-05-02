
import { NavBar,Aside,VideoCard } from "../../components";
import { useData } from "../../contexts";
import { sortVideosCategory,sortVideosBySearch } from "../../Services/services";
import { ACTION_TYPE } from "../../utils/ActionType";
import "./Home.css"


export const Home=()=>{
    const {state,dispatch}= useData();
    const videoArray= state.videos;
    const sortHandler=(catName)=>{
        dispatch({type:ACTION_TYPE.SORT_BY, payload:catName})
    }
    const sortBySearch= sortVideosBySearch(videoArray,state.search);
    const sortByCategory= sortVideosCategory(sortBySearch,state.sortBy);
    return (
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main flex-col">
                <div className="category-list flex-row">
                    {state.categories.map(({_id,categoryName,isActive})=>{
                        return(
                            <div className={isActive?"chip-active flex-row":"chip flex-row"}
                            onClick={()=>sortHandler(categoryName)}
                            >
                                <p className="category-name">{categoryName}</p>
                            </div>
                        )
                    })}
                </div>
                <section className="videos-container">
             {sortByCategory.map((item)=>{
                  return (
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