import Sidebar from "./layouts";
import style from "./style.module.css"

const Home = ()=>{
  return(
   <>
       <div className="layout-content">
        <Sidebar/>
        <div className="org-container">
            <div className="container home-page">
              <h1 style={{textAlign:"center"}} className={style.logo}>Home Page</h1>
            </div>
         </div>
        </div>
   
   </>
  )
}
export default Home;