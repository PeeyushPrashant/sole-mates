import { NavBar,Aside } from "../../components";
import { HistoryCard } from "./HistoryCard";
import { useData } from "../../contexts";
import { useNavigate } from "react-router-dom";

export const History=()=>{
    const {state}= useData();
    const navigate= useNavigate();
    const historyArray= state.history;
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <Aside/>
            <div className="right-main flex-row">
            {historyArray.length<1 && 
            <div className="message-container flex-col">
              <p className="message">Looks like you haven't watched anything yet</p>
              <button className="cta-button" onClick={()=>navigate("/")}>Start watching now</button>
            </div>
            }
            {historyArray.length>0 && <section className="videos-container">
              {historyArray.map((item)=>{
                  return (
                     <HistoryCard
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