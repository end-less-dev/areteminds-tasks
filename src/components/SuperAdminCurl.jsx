import Sidebar from "./layouts";
import style from "./style.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { GET_ROLEBY_ID_CURL } from "./utils/constant";

const SuperAdminCurl = ()=>{
    const[data,setData] = useState([]);
    useEffect(()=>{
        const apiRes = async()=> {await axios.get(GET_ROLEBY_ID_CURL)
        .then((res)=>setData(res.data))
        .catch((error)=>console.log(error))}
        apiRes();
    },[])
    console.log("Curl Response",data)
    if (!data || data.length === 0) {
        return <div style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><div class="spinner-grow text-primary" role="status" style={{height:"50px",width:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <span class="visually-hidden">Loading...</span>
      </div></div>
      }
    
    return(
        <>
            <div className="layout-content">
                <Sidebar/>
                <div className="org-container">
                <h1 style={{textAlign:"center"}} className={style.logo}>Super Admin Data Entry Operator User Curl</h1>
                <hr />
                <table class="table table-striped table-dark text-center">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? (
                            data.data.map((res)=>{
                                return(
                                    <tr>
                                        <td>{res.userName}</td>
                                        <td>{res.firstName}</td>
                                        <td>{res.emailAddress}</td>
                                        <td>{res.phoneNumber}</td>
                                        <td><i class="bi bi-three-dots-vertical"></i></td>
                                    </tr>
                                )
                            })
                        ):(
                            <tr>
                                <td>Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}
export default SuperAdminCurl;