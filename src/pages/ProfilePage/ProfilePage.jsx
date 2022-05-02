import { NavBar,Aside } from "../../components"
import { useAuth } from "../../contexts"
import "./ProfilePage.css"

export const ProfilePage=()=>{
    const {user,logOutHandler}=useAuth();
   return(
       <>
       <NavBar/>
       <main className="main-cont flex-row">
         <Aside/>
         <div className="right-main  flex-row">
         <div className="card profile-card">
               <header className="flex-row">
                   <div className="header-tab">Profile</div>
               </header>
                <h3 className="profile-card-headings">Profile Details</h3>
               <section className="user-details flex-col">
                   <div className="user-data flex-row">
                       <h4 className="profile-card-headings">Name:</h4>
                       <p>{user.name}</p>
                   </div>
                   <div className=" user-data flex-row">
                       <h4 className="profile-card-headings">Email:</h4>
                       <p>{user.email}</p>
                   </div>
               </section>
               <h3 className="profile-card-headings">Account Settings</h3>
               <footer>
                   <button className="btn logout-btn"
                   onClick={logOutHandler}
                   >Log Out</button>
               </footer>
            </div>
         </div>
       </main>
       </>
   )
}