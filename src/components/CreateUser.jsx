import RestrauntSidebar from "./Restraunt/RestrauntSidebar";
import style from "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_DATA_ENTRY_OP } from "./utils/constant";
import axios from "axios";

const CreateUser = ()=>{

    const navigate = useNavigate();
    const[response,setResponse] = useState("")
    const[userName,setUserName] = useState("");
    const[firstName,setFname] = useState("");
    const[lastName,setLname] = useState("")
    const[newPassword,setPassword] = useState("");
    const[email,setEmail] = useState("");

    const[unameErrMsg,setUNameErrMsg] = useState("");
    const[fnameErrMsg,setFnameErrMsg] = useState("");
    const[lnameErrMsg,setLnameErrMsg] = useState("")
    const[passswordErrMsg,setPasswordErrMsg] = useState("");
    const[emailErrMsg,setEmailErrMsg] = useState("");

    const[unameValidate,setUnameValidate] = useState(false);
    const[fnameValidate,setFnameValidate] = useState(false);
    const[lnameValidate,setLnameValidate] = useState(false)
    const[passwordValidate,setPasswordValidate] = useState(false);
    const[emailValidate,setEmailValidate] = useState(false);

    let nameRegex = /^([a-zA-Z ]){2,30}$/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    // useEffect(()=>{
    //    axios.post(CREATE_DATA_ENTRY_OP)
    //    .then((res)=>setResponse(res.status))
    //    .catch((err)=>console.log(err))
    // })
    //console.log("Create user API response",response)
    const handleUname =(e)=>{
        setUserName(e.target.value)
    }
    const handleFname = (e)=>{
        setFname(e.target.value)
    }
    const handleLname = (e)=>{
        setLname(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        let flag = true;
        setUNameErrMsg("")
        setFnameErrMsg("")
        setLnameErrMsg("")
        setPasswordErrMsg("")
        setEmailErrMsg("")
        setUnameValidate(false)
        setFnameValidate(false)
        setLnameValidate(false)
        setPasswordValidate(false)
        setEmailValidate(false)

        if(userName === ""){
            flag = false;
            setUNameErrMsg("Required")
            setUnameValidate(true)
        }
        if(firstName === ""){
            flag = false
            setFnameErrMsg("Required")
            setFnameValidate(true)
        }
        if(firstName !== "" && nameRegex.test(firstName)=== false){
            flag = false
            setFnameErrMsg("Please enter valid name")
            setFnameValidate(true)
        }
        if(lastName === ""){
            flag = false
            setLnameErrMsg("Required")
            setLnameValidate(true)
        }
        if(lastName !== "" && nameRegex.test(lastName)=== false){
            flag = false
            setLnameErrMsg("Please enter valid name")
            setLnameValidate(true)
        }
        if(newPassword === ""){
            flag = false
            setPasswordErrMsg("Required")
            setPasswordValidate(true)
        }
        if(newPassword !== "" && passwordRegEx.test(newPassword) === false){
            flag = false
            setPasswordValidate(true)
            setPasswordErrMsg("Password must be combination of 0-9,a-z,A-Z,!@#$%^&*()")
        }
        if(newPassword !== "" && newPassword.length < 8){
            flag = false;
            setPasswordValidate(true);
            setPasswordErrMsg("Password must be 8 characters")
        }
        if(email === ""){
            flag = false
            setEmailErrMsg("Required")
            setEmailValidate(true)
        }
        if(email !== "" && emailRegex.test(email) === false){
            flag = false;
            setEmailErrMsg("Please enter valid email")
            setEmailValidate(true)
        }
        if(flag === true){
            const roleId = "06476e15-dfae-4068-8beb-e5bce310ee6a"
            const formData = {userName,firstName,lastName,email,newPassword,roleId}
            const Data = JSON.stringify(formData)
            console.log(Data)
            const headers = {'Content-Type':'application/json'}
            axios(CREATE_DATA_ENTRY_OP,{
                method:"POST",
                headers,
                data:Data
            })
            .then((res)=>{
                navigate("/superAdmin")
                setResponse(res.status)
            })
            
            .catch((error)=>console.log(alert(error)))
        }
    }
    console.log("API-RESPONSE",response)

    const handleCancel = ()=>{
        navigate("/superAdmin")
    }

    return(
        <>
            <div className="layout-content">
                <RestrauntSidebar/>
                <div className="org-container">
                    <h1 style={{textAlign:"center"}} className={style.logo}>Create User</h1>
                    <br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                    <input type="text" className={`form-control ${unameValidate ? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter Username" value={userName} onChange={handleUname}/>
                                    {unameErrMsg?.length > 0 && (
                                        <p className={style.msg}>{unameErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                    <input type="text" className={`form-control ${fnameValidate ? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter first name" value={firstName} onChange={handleFname}/>
                                    {fnameErrMsg?.length > 0 && (
                                        <p className={style.msg}>{fnameErrMsg}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                    <input type="text" className={`form-control ${lnameValidate ? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter your last name" value={lastName} onChange={handleLname}/>
                                    {lnameErrMsg?.length > 0 && (
                                        <p className={style.msg}>{lnameErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" className={`form-control ${emailValidate ? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter your Email" value={email} onChange={handleEmail}/>
                                    {emailErrMsg?.length > 0 && (
                                        <p className={style.msg}>{emailErrMsg}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div className="mb-3" style={{width:"50%"}}>
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="password" className={`form-control ${passwordValidate ? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter Password" value={newPassword} onChange={handlePassword}/>
                                    {passswordErrMsg?.length > 0 && (
                                        <p className={style.msg}>{passswordErrMsg}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                            <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateUser;