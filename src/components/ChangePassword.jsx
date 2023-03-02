import Sidebar from "./layouts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

const ChangePassword =()=>{
    const[password,setPassword] = useState("")
    const[newPassword,setNewPassword] = useState("");
    const[confirmPass,setConfirmPass] = useState("");
    const navigate = useNavigate();

    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handleNewPass = (e)=>{
        setNewPassword(e.target.value)
    }
    const handleConfirmPass = e =>{
        setConfirmPass(e.target.value)
    }
    // Regular Expression
    let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    const[passErrMsg,setPassErrMsg] = useState("")
    const[newPassErrMsg,setNewPassErr] = useState("");
    const[confirmPassErrMsg,setConfirmPassErrMsg] = useState("")
    const[passValidate,setPassValidate] = useState(false);
    const[newPassValidate,setNewPassValidate] = useState(false)
    const[confirmPassValidate,setConfirmPassValidate] = useState(false)

    const handleSubmit = (e)=>{
        let flag = true;
        setPassErrMsg("")
        setNewPassErr("")
        setConfirmPassErrMsg("");
        setPassValidate(false)
        setNewPassValidate(false);
        setConfirmPassValidate(false);

        if(password === ""){
            flag = false
            setPassValidate(true)
            setPassErrMsg("Please enter the Password")
        }
        if(newPassword === ""){
            flag = false;
            setNewPassErr("Please enter the Pasword")
            setNewPassValidate(true)
        }
        if(newPassword !== "" && passwordRegEx.test(newPassword)=== false){
            flag = false
            setNewPassValidate(true)
            setNewPassErr("Password must be combination of 0-9,a-z,A-Z,!@#$%^&*()")
        }
        if(newPassword !== "" && newPassword.length < 8){
            flag = false;
            setNewPassValidate(true);
            setNewPassErr("Password must be 8 characters")
        }
        if(confirmPass === ""){
            flag = false;
            setConfirmPassErrMsg("Please enter confirm password")
            setConfirmPassValidate(true)
        }
        if(newPassword !== "" && confirmPass !=="" && newPassword !== confirmPass){
            flag = false
            setConfirmPassErrMsg("New password and Confirm password must be same")
            setConfirmPassValidate(true)
        }
        if(flag===true){
            alert("Password Updated")
            setConfirmPass("")
            setNewPassword("")
            setPassword("")
            navigate("/changePassword")
        }
    }
    return(
        <>
        <div className="layout-content">
            <Sidebar/>
            <div className="org-container">
            <div className="container" style={{width:"40%"}}>
            <div className="gap"></div>
            <div className="card" style={{border:"none"}}>
                <div className="card-body">
                    <div className="card-title title">Change Password</div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Current Password</label>
                        <input type="password" className={`form-control ${passValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter the Password" value={password} onChange={handlePassword}/>
                        {passErrMsg?.length > 0 && (
                            <p className={style.msg}>{passErrMsg}</p>
                        )}
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">New Password</label>
                        <input type="password" className={`form-control ${newPassValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter the Password" value={newPassword} onChange={handleNewPass}/>
                        {newPassErrMsg?.length>0 && (
                            <p className={style.msg}>{newPassErrMsg}</p>
                        )}
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                        <input type="password" className={`form-control ${confirmPassValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter the Password" value={confirmPass} onChange={handleConfirmPass}/>
                        {confirmPassErrMsg?.length>0 && (
                            <p className={style.msg}>{confirmPassErrMsg}</p>
                        )}
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <button class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
        </>
    )
}
export default ChangePassword;