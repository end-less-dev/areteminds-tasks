import Sidebar from "./layouts";
import { useState } from "react";
import style from "./style.module.css"
import { useNavigate } from "react-router-dom";
import Card from "../json-packages/Card.json";
import Modal from "react-bootstrap/Modal"

const AddDep = ()=>{
    const navigate = useNavigate();

     // Modal functions 
     const [show, setShow] = useState(false);

    const[fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    const[gender,setGender] = useState("");
    const[height,setHeight] = useState("");
    const[weight,setWeight] = useState("");
    const[dob,setDob] = useState("")
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[passport,setPassport] = useState("");
    const[healthNo,setHealthNo] = useState("");

    // Validations
    let nameRegex = /^([a-zA-Z ]){2,30}$/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passportRegex = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/;


    const[fnameErrMsg,setFnameErrMsg] = useState("");
    const[lnameErrMsg,setLnameErrMsg] = useState("");
    const[genderErrMsg,setGenderErrMsg] = useState("");
    const[heightErrMsg,setHeightErrMsg] = useState("");
    const[weightErrMsg,setWeightErrMsg] = useState("");
    const[dobErrMsg,setDobErrMsg] = useState("")
    const[emailErrMsg,setEmailErrMsg] = useState("")
    const[phoneErrMsg,setPhoneErrMsg] = useState("")
    const[passportErrMsg,setPassportErrMsg] = useState("");
    const[healthErrMsg,setHealthErrMsg] = useState("");

    const[fnameValidate,setFnameValidate] = useState(false);
    const[lnameValidate,setLnameValidate] = useState(false);
    const[genValidate,setGenValidate] = useState(false);
    const[heiValidate,setHeiValidate] = useState(false);
    const[weiValidate,setWeiValidate] = useState(false);
    const[dobValidate,setDobValidate] = useState(false);
    const[emailValidate,setEmailValidate] = useState(false);
    const[phoneValidate,setPhoneValidate] = useState(false);
    const[passValidate,setPassValidate] = useState(false);
    const[healthValidate,setHealthValidate] = useState(false);

    const handleFname = (e)=>{
        setFname(e.target.value)
    }
    const handleLname = (e)=>{
        setLname(e.target.value)
    }
    const handleGen = (e)=>{
        setGender(e.target.value)
    }
    const handleHeight = (e)=>{
        setHeight(e.target.value)
    }
    const handleWeight = (e)=>{
        setWeight(e.target.value)
    }
    const handleDob = (e)=>{
        setDob(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePhone = (e)=>{
        setPhone(e.target.value)
    }
    const handlePass = (e)=>{
        setPassport(e.target.value)
    }
    const handleHealth = (e)=>{
        setHealthNo(e.target.value)
    }

    const handleAddDep = (e)=>{
        e.preventDefault();
        let flag = true;
        setFnameErrMsg("");
        setLnameErrMsg("");
        setGenderErrMsg("");
        setHeightErrMsg("");
        setWeightErrMsg("");
        setDobErrMsg("");
        setEmailErrMsg("")
        setPhoneErrMsg("")
        setPassportErrMsg("");
        setHealthErrMsg("");
        setFnameValidate(false)
        setLnameValidate(false)
        setGenValidate(false)
        setHeiValidate(false)
        setWeiValidate(false)
        setDobValidate(false)
        setEmailValidate(false)
        setPhoneValidate(false)
        setPassValidate(false)
        setHealthValidate(false)

        if(fname === ""){
            flag = false
            setFnameErrMsg("Please enter First Name")
            setFnameValidate(true)
        }
        if(fname !== "" && nameRegex.test(fname)=== false){
            flag = false
            setFnameErrMsg("Please enter valid name")
            setFnameValidate(true)
        }
        if(lname === ""){
            flag = false;
            setLnameErrMsg("Please enter Last Name")
            setLnameValidate(true)
        }
        if(lname !== "" && nameRegex.test(lname)=== false){
            flag = false
            setLnameErrMsg("Please enter valid name")
            setLnameValidate(true)
        }
        if(gender === ""){
            flag = false
            setGenderErrMsg("Please choose your Gender")
            setGenValidate(true)
        }
        if(height === ""){
            flag = false
            setHeightErrMsg("Please enter Height")
            setHeiValidate(true)
        }
        if(weight === ""){
            flag = false
            setWeightErrMsg("Please enter Weight")
            setWeiValidate(true)
        }
        if(dob === ""){
            flag = false
            setDobErrMsg("Please enter Date of Birth")
            setDobValidate(true)
        }
        if(dob !== "" && new Date() < new Date(dob)){
            flag = false
            setDobErrMsg("Please pick valid DOB")
            setDobValidate(true)
        }
        if(email !== "" && emailRegex.test(email) === false){
            flag = false;
            setEmailErrMsg("Please enter valid email")
            setEmailValidate(true)
        }
        if(phone !== "" && phone.length < 10){
            flag = false
            setPhoneErrMsg("Phone number must be 10 digits")
            setPhoneValidate(true)
        }
        if(passport === ""){
            flag = false;
            setPassportErrMsg("Please enter Passport Number")
            setPassValidate(true)
        }
        if(passport !== "" && passportRegex.test(passport) === false){
            flag = false
            setPassportErrMsg("Please enter valid passport number")
            setPassValidate(true)
        }
        if(healthNo === ""){
            flag = false
            setHealthErrMsg("Please enter Health Number")
            setHealthValidate(true)
        }
        if(flag === true){
            // const aa = {fname,lname,gender,height,weight,dob,email,phone,passport,healthNo}
            // const aJson = JSON.stringify(aa)
            // console.log(aJson)
            Card.push({fname,lname,gender,height,weight,dob,email,phone,passport,healthNo})
            setFname("")
            setLname("")
            setGender("")
            setEmail("")
            setPhone("")
            setDob("")
            setHeight("")
            setWeight("")
            setPassport("")
            setHealthNo("")
            // navigate("/profileCard")
            setShow(true)
        }
    }
    const handleModalClose = ()=>{
        setShow(false)
        navigate("/profileCard")

    }
    const handleCancel = ()=>{
        navigate("/profileCard");
    }
    return(
        <>
        <div className="layout-content">
            <Sidebar/>
                <div className="org-container">
                    <div className="container">
                    <h1 style={{textAlign:"center"}} className={style.logo}>Add Dependents</h1>
                    <hr />
                            <div className="row">
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                        <input type="text" className={`form-control ${fnameValidate ? "error":""}`}  placeholder="John" value={fname} onChange={handleFname}/>
                                        {fnameErrMsg?.length > 0 && (
                                            <p className={style.msg}>{fnameErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                        <input type="text" className={`form-control ${lnameValidate ? "error":""}`}  placeholder="Doe" value={lname} onChange={handleLname}/>
                                        {lnameErrMsg?.length > 0 && (
                                            <p className={style.msg}>{lnameErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                <label for="exampleFormControlInput1" class="form-label">Gender</label>
                                <select className={`form-select ${genValidate ? "error":""}`} aria-label="Default select example" value={gender} onChange={handleGen}>
                                    <option selected>Choose your gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="TransGender">TransGender</option>
                                </select>
                                {genderErrMsg?.length > 0 && (
                                    <p className={style.msg}>{genderErrMsg}</p>
                                )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Height(cm)</label>
                                        <input type="text" className={`form-control ${heiValidate ? "error":""}`}  placeholder="Enter your Height" value={height} onChange={handleHeight} onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            }
                                        }}/>
                                        {heightErrMsg?.length > 0 && (
                                            <p className={style.msg}>{heightErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Weight(kg)</label>
                                        <input type="text" className={`form-control ${weiValidate ? "error":""}`}  placeholder="Enter your Weight" value={weight} onChange={handleWeight} onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            }
                                        }}/>
                                        {weightErrMsg?.length > 0 && (
                                            <p className={style.msg}>{weightErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
                                        <input type="date" className={`form-control ${dobValidate ? "error":""}`} value={dob} onChange={handleDob}/>
                                        {dobErrMsg?.length > 0 && (
                                            <p className={style.msg}>{dobErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email(optional)</label>
                                        <input type="email" className={`form-control ${emailValidate ? "error":""}`}  placeholder="Enter your Email" value={email} onChange={handleEmail}/>
                                        {emailErrMsg?.length > 0 && (
                                            <p className={style.msg}>{emailErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Phone Number(optional)</label>
                                        <input type="text" className={`form-control ${phoneValidate ? "error":""}`}  placeholder="Enter your Phone no" value={phone} onChange={handlePhone} onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            }
                                        }} maxLength={10}/>
                                        {phoneErrMsg?.length > 0 && (
                                            <p className={style.msg}>{phoneErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Passport</label>
                                        <input type="text" className={`form-control ${passValidate ? "error":""}`}  placeholder="Enter your Passport no" value={passport} onChange={handlePass}/>
                                        {passportErrMsg?.length > 0 && (
                                            <p className={style.msg}>{passportErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="mb-3" style={{width:"33%"}}>
                                    <label for="exampleFormControlInput1" class="form-label">Provincial Healt Number</label>
                                    <input type="text" className={`form-control ${healthValidate ? "error":""}`}  placeholder="57764646" value={healthNo} onChange={handleHealth} onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            }
                                        }}/>
                                    {healthErrMsg?.length > 0 && (
                                        <p className={style.msg}>{healthErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <button className="btn btn-success" onClick={handleAddDep}>Add</button>
                                <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                        <Modal show={show} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Body>
                                <h4 style={{textAlign:"center"}}>Successfully Added</h4>
                                <div style={{display:"flex",justifyContent:"center"}}>
                                    <button className="btn btn-primary" onClick={handleModalClose}>okay</button>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </>
    )
}
export default AddDep;