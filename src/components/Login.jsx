import { Link,useNavigate } from "react-router-dom";
import { useState} from "react";
import style from "./style.module.css";
import "./index.css"
 
const Login =()=>{
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("")
    const[emailErrMsg,setEmailErrMsg] = useState("")
    const[passErrMsg,setPassErrMsg] = useState("")
    const[emailValidate,setEmailValidate] = useState(false);
    const[passValidate,setPassValidate] = useState(false);


    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    const navigte = useNavigate();

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        let flag = true
        setEmailErrMsg("")
        setPassErrMsg("")
        setEmailValidate(false)
        setPassValidate(false)

        if(email === ""){
            flag = false
            setEmailValidate(true)
            setEmailErrMsg("Please enter the Email")
        }
        if(email !== "" && emailRegex.test(email)=== false){
            flag = false;
            setEmailValidate(true)
            setEmailErrMsg("Please enter valid Email ID")
        }
        if(password === ""){
            flag = false
            setPassValidate(true)
            setPassErrMsg("Please enter the Password")
        }
        if(password !== "" && passwordRegEx.test(password) === false){
            flag = false
            setPassValidate(true)
            setPassErrMsg("Password must be combination of 0-9,a-z,A-Z,!@#$%^&*()")
        }
        if(password !== "" && password.length < 8){
            flag = false;
            setPassValidate(true);
            setPassErrMsg("Password must be 8 characters")
        }
        if(flag=== true){
            navigte("/home")
        }
    }
    return(
        <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
            <div className="card col-md-6 box">
                <div className="card-body">
                    <div className="card-title title">Log In</div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" className={`form-control ${emailValidate? "error":""}`} id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmail}/>
                        {emailErrMsg?.length>0 && (
                            <p className={style.msg}>{emailErrMsg}</p>
                        )}
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" className={`form-control ${passValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter the Password" value={password} onChange={handlePassword}/>
                        {passErrMsg?.length > 0 && (
                            <p className={style.msg}>{passErrMsg}</p>
                        )}
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <button class="btn btn-primary" onClick={handleLogin}>Log In</button>
                    </div>
                    <div>
                        <div>
                            <Link to="/newPassword">Forgot Password ?</Link>
                            <p>Don't have an account ?<Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;