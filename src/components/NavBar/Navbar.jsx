import "./NavBar.css"

export const NavBar=()=>{
    return (
        <>
        <nav className="navbar flex-row">
          
          <div className="nav-heading flex-row"
        //   onClick={()=>navigate("/")}
          >
            <h1 className="heading">SoleMates</h1>
          </div>
          <div className="nav-search flex-row">
          <i className="fas fa-search search-icon"></i>
          <input type="text" className="nav-input" placeholder="Search for videos"
        //   onKeyDown={(e)=>{
        //     if(e.key === 'Enter' || e.target.value === ''){
        //       filterDispatch({type:"FILTER", payload:["search",e.target.value]})
        //     }
        //   }}
          />
         
        </div>
        <div className="saved-item-container flex-row">
        
        <div className="saved-item flex-row"
        // onClick={()=>navigate("/login")}
        >
        <i class="fas fa-sign-in-alt  nav-icon"></i>
        </div>
        
          <div className="saved-item flex-row"
        //   onClick={changeTheme}
          >
           <i className="bi bi-brightness-high nav-icon"></i>
          </div>
          <div className="saved-item flex-row"
        //   onClick={sideBarHandler}
          >
          <i class="fas fa-bars nav-icon hamburger"></i>
          </div>
        </div>
      </nav>
      {/* <section className="mobile-search-cont">
       <div className="mobile-nav-search ">
          <i className="fas fa-search search-icon"></i>
          <input type="text" className="nav-input" placeholder="Type to search"
          onKeyDown={(e)=>{
            if(e.key === 'Enter' || e.target.value === ''){
              filterDispatch({type:"FILTER", payload:["search",e.target.value]})
            }
          }}
          />
           <div className="filter-icon" onClick={sortFilterHandler}><i className="fas fa-filter icon-sm"></i></div>
        </div>
        </section> */}
       
        </>
    )
}