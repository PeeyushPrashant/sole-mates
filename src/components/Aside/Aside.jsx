import "./Aside.css"
import { NavLink } from "react-router-dom"

export const Aside=()=>{
    return (
        <aside className="sideBar flex-col"
        // {sideBar? "showSide flex-col": "sideBar flex-col"}
        >
          <NavLink to="/"
        //   style={getActiveStyle}
          >
        <div className="aside-tab flex-row"
        // onClick={sideBarHandler}
        >
        <i className="fas fa-home icon-md"></i>
            <p className="aside-subhead">Home</p>
        </div>
        </NavLink>
        <NavLink to="/labels"
        // style={getActiveStyle}
        >
        <div className="aside-tab flex-row"
        // onClick={sideBarHandler}
        >
        <i className="fas fa-play-circle icon-md"></i>
            <p className="aside-subhead">Playlist</p>
        </div>
        </NavLink>
        <NavLink to="/liked"
        // style={getActiveStyle}
        >
        <div className="aside-tab flex-row"
        // onClick={sideBarHandler}
        >
        <i className="fas fa-thumbs-up icon-md"></i>
            <p className="aside-subhead">Liked</p>
        </div>
        </NavLink>
        <NavLink to="/watchlater"
        // style={getActiveStyle}
        >
        <div className="aside-tab flex-row">
        <i className="far fa-clock icon-md"></i>
            <p className="aside-subhead">Watch Later</p>
        </div>
        </NavLink>
        <NavLink to=""
        >
        <div className="aside-tab flex-row">
        <i className="fas fa-history icon-md"></i>
         <p className="aside-subhead">History</p>
        </div>
        </NavLink>
      </aside>
    )
}