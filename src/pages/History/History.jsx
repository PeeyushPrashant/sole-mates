import { NavBar,Aside } from "../../components";
import { HistoryCard } from "./HistoryCard";
import { useData } from "../../contexts";


export const History=()=>{
    const {state}= useData();
    const historyArray= state.history;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main">
              {historyArray.map((item)=>{
                  return (
                     <HistoryCard
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