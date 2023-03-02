import Sidebar from "./layouts";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./utils/constant";

const ViewList = ()=>{
    const navigate = useNavigate();
    let {id} = useParams();
    const[dataId,setDataId] = useState("");
    const[dataPostId,setDataPostId] = useState("")
    const[nameData,setNameData] = useState("");
    const[dataEmail,setDataEmail] = useState("");
    const[dataBody,setBodyData] = useState("");

    useEffect(()=>{
        axios.get(`${API_URL}/${id}`)
        .then((res)=>{
            setDataId(res.data.id)
            setDataPostId(res.data.postId)
            setNameData(res.data.name)
            setDataEmail(res.data.email)
            setBodyData(res.data.body)
            console.log(res.data)
        })
        .catch((error)=>console.log(error))
    },[id])
    const back = ()=>{
        navigate("/list")
    }
    return(
        <>
        <div className="layout-content">
            <Sidebar/>
            <div className="org-container">
            <button className="btn btn-primary" style={{margin:"30px 0px"}} onClick={back}>Back</button>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title" style={{textAlign:"center"}}>User Details</h2>
                        <p className="card-text"><b>ID :</b> {dataId}</p>
                        <p className="card-text"><b>POST ID :</b> {dataPostId}</p>
                        <p className="card-text"><b>NAME :</b> {nameData}</p>
                        <p className="card-text"><b>EMAIL :</b> {dataEmail}</p>
                        <p className="card-text"><b>BODY :</b> {dataBody}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ViewList;