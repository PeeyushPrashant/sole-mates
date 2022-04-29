import "./Aside.css"
import { NavLink } from "react-router-dom"
import { useData } from "../../contexts"

export const Aside=()=>{
  const {sideBar, sideBarHandler}= useData();
    return (
      
      <div className={sideBar? "show-backdrop": "hide-backdrop"}>
        <aside className={sideBar? "showSide  flex-col": "sideBar flex-col"}
        >
          <NavLink to="/"
        //   style={getActiveStyle}
          >
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="fas fa-home icon-md"></i>
            <p className="aside-subhead">Home</p>
        </div>
        </NavLink>
        <NavLink to="/playlist"
        // style={getActiveStyle}
        >
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="fas fa-play-circle icon-md"></i>
            <p className="aside-subhead">Playlist</p>
        </div>
        </NavLink>
        <NavLink to="/liked"
        // style={getActiveStyle}
        >
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="fas fa-thumbs-up icon-md"></i>
            <p className="aside-subhead">Liked</p>
        </div>
        </NavLink>
        <NavLink to="/watchlater"
        // style={getActiveStyle}
        >
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="far fa-clock icon-md"></i>
            <p className="aside-subhead">Watch Later</p>
        </div>
        </NavLink>
        <NavLink to="/history"
        >
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="fas fa-history icon-md"></i>
         <p className="aside-subhead">History</p>
        </div>
        </NavLink>
      </aside>
      </div>
      
    )
}