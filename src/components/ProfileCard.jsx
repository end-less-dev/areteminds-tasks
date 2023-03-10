import Sidebar from "./layouts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import Card from "../json-packages/Card.json"


const ProfileCard = ()=>{
    const navigate = useNavigate();
    
    const[data,setData]  = useState(Card)
    
    const handleDelete = (data)=>{
		setData(Card.filter((x)=>x.healthNo !== data))
	}

    const addDepPage = ()=>{
        navigate("/addDep")
    }
    const editDepPage = (id)=>{
        navigate(`/editDep/${id}`)
    }
    const handleView = (viewId)=>{
        navigate(`/viewDep/${viewId}`)
    }

    return(
        <>
        <div className="layout-content">
            <Sidebar/>
            <div className="org-container">
                <h1 style={{textAlign:"center"}} className={style.logo}>Profile Card</h1>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <button className="btn btn-primary" style={{borderRadius:"12px"}} onClick={addDepPage}>Add Dependents</button>
                </div>
                <hr />
                {/* Card */}
                <div className="myflex">
                    {data.map((data)=>{
                        return(
                            <div className="card" style={{width:"30%",backgroundColor:"#f1f1f1"}} key={data.healthNo}>
                                <div className="card-body">
                                    <div className="flex-con">
                                        <div className="one">
                                            <p>Full Name</p>
                                            <p>{data.fname}<span> </span>{data.lname}</p>
                                        </div>
                                        <div className="two">
                                            <i class="bi bi-pen-fill" style={{cursor:"pointer"}} onClick={()=>{editDepPage(data.healthNo)}}></i>
                                            <i class="bi bi-trash3-fill" style={{marginLeft:"5px",color:"red",cursor:"pointer"}} onClick={()=>{handleDelete(data.healthNo)}}></i>
                                            <i class="bi bi-eye-fill" style={{marginLeft:"5px",color:"blue",cursor:"pointer"}} onClick={()=>{handleView(data.healthNo)}}></i>
                                        </div>
                                    </div>
                                    <div className="flex-con">
                                        <div className="one">
                                            <p>Date of Birth</p>
                                            <p>{data.dob}</p>
                                        </div>
                                        <div className="two">
                                            <p>Gender</p>
                                            <p>{data.gender}</p>
                                        </div>
                                    </div>
                                    <div className="email">
                                        <p>Email</p>
                                        <p>{data.email}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
export default ProfileCard;