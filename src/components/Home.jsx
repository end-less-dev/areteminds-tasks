import Sidebar from "./layouts";
const Home = ()=>{
  return(
   <>
       <div className="layout-content">
        <Sidebar/>
        <div className="org-container">
            <h1>Home Page</h1>
         </div>
        </div>
   
   </>
  )
}
export default Home;