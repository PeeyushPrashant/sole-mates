import "./NavBar.css"
import { useNavigate } from "react-router-dom"
import {useAuth,useData,useTheme} from "../../contexts"
import { ACTION_TYPE } from "../../utils/ActionType"

export const NavBar=()=>{
  const {token,logOutHandler} = useAuth();
  const {sideBarHandler,dispatch}= useData();
  const {theme,changeTheme} = useTheme();
  const navigate=useNavigate();
    return (
        <>
        <nav className="navbar flex-row">
          <div className="nav-heading flex-row"
          onClick={()=>navigate("/")}
          >
            <h1 className="heading">SoleMates</h1>
          </div>
          <div className="nav-search flex-row">
          <i className="fas fa-search search-icon"></i>
          <input type="text" className="nav-input" placeholder="Search for videos"
          onKeyDown={(e)=>{
            if(e.key === 'Enter' || e.target.value === ''){
               dispatch({type:ACTION_TYPE.SEARCH, payload:e.target.value})
            }
          }}
          />
         
        </div>
        <div className="saved-item-container flex-row">
        {!token?<div className="saved-item flex-row"
        onClick={()=>navigate("/login")}
        >
        <i className="fas fa-sign-in-alt  nav-icon"></i>
        </div>:
        <div className="saved-item flex-row"
        onClick={logOutHandler}
        >
        <i className="fas fa-user-circle nav-icon"></i>
        </div>
        }
        
        
          <div className="saved-item flex-row"
          onClick={changeTheme}
          >
           {theme==="dark"?<i className="bi bi-brightness-high nav-icon"></i>:<i className="bi bi-moon-fill nav-icon"></i>}
          </div>
          <div className="saved-item flex-row"
          onClick={sideBarHandler}
          >
          <i className="fas fa-bars nav-icon hamburger"></i>
          </div>
        </div>
      </nav>
      <section className="mobile-search-cont">
       <div className="mobile-nav-search ">
          <i className="fas fa-search search-icon"></i>
          <input type="text" className="nav-input" placeholder="Search for videos"
          onKeyDown={(e)=>{
            if(e.key === 'Enter' || e.target.value === ''){
               dispatch({type:ACTION_TYPE.SEARCH, payload:e.target.value})
            }
          }}
          />
          
        </div>
        </section>
       
        </>
    )
}