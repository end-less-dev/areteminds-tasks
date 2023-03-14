import Sidebar from "./layouts";
import style from "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = ()=>{

    const navigate = useNavigate();
    const[username,setUserName] = useState("");
    const[fname,setFname] = useState("");
    const[phone,setPhone] = useState("");
    const[email,setEmail] = useState("");

    const[unameErrMsg,setUNameErrMsg] = useState("");
    const[fnameErrMsg,setFnameErrMsg] = useState("");
    const[phoneErrMsg,setPhoneErrMsg] = useState("");
    const[emailErrMsg,setEmailErrMsg] = useState("");

    const[unameValidate,setUnameValidate] = useState(false);
    const[fnameValidate,setFnameValidate] = useState(false);
    const[phoneValidate,setPhoneValidate] = useState(false);
    const[emailValidate,setEmailValidate] = useState(false);

    const handleUname =(e)=>{
        setUserName(e.target.value)
    }
    const handleFname = (e)=>{
        setFname(e.target.value)
    }
    const handlePhone = (e)=>{
        setPhone(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        let flag = true;
        setUNameErrMsg("")
        setFnameErrMsg("")
        setPhoneErrMsg("")
        setEmailErrMsg("")
        setUnameValidate(false)
        setFnameValidate(false)
        setPhoneValidate(false)
        setEmailValidate(false)

        if(username === ""){
            flag = false;
            setUNameErrMsg("Required")
            setUnameValidate(true)
        }
        if(fname === ""){
            flag = false
            setFnameErrMsg("Required")
            setFnameValidate(true)
        }
        if(phone === ""){
            flag = false
            setPhoneErrMsg("Required")
            setPhoneValidate(true)
        }
        if(email === ""){
            flag = false
            setEmailErrMsg("Required")
            setEmailValidate(true)
        }
        if(flag === true){

        }
    }

    const handleCancel = ()=>{
        navigate("/superAdmin")
    }

    return(
        <>
            <div className="layout-content">
                <Sidebar/>
                <div className="org-container">
                    <h1 style={{textAlign:"center"}} className={style.logo}>Create User</h1>
                    <br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                    <input type="text" className={`form-control ${unameValidate ? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter Username" value={username} onChange={handleUname}/>
                                    {unameErrMsg?.length > 0 && (
                                        <p className={style.msg}>{unameErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                    <input type="text" className={`form-control ${fnameValidate ? "error":""}`} id="exampleFormControlInput1" placeholder="Fist name" value={fname} onChange={handleFname}/>
                                    {fnameErrMsg?.length > 0 && (
                                        <p className={style.msg}>{fnameErrMsg}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                    <input type="text" className={`form-control ${phoneValidate ? "error":""}`} id="exampleFormControlInput1" placeholder="Phone number" value={phone} onChange={handlePhone}/>
                                    {phoneErrMsg?.length > 0 && (
                                        <p className={style.msg}>{phoneErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" className={`form-control ${emailValidate ? "error":""}`} id="exampleFormControlInput1" placeholder="Email" value={email} onChange={handleEmail}/>
                                    {emailErrMsg?.length > 0 && (
                                        <p className={style.msg}>{emailErrMsg}</p>
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