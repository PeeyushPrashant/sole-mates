import {ThreeCircles} from "react-loader-spinner"
import "./Loader.css"

export const Loader= ()=>{
    return(
        <div className="loader flex-row">
           <ThreeCircles color="#e75a4b" />
       </div>
    )
}