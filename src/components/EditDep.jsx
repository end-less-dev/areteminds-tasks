import Sidebar from "./layouts";
import style from "./style.module.css";
import Card from "../json-packages/Card.json";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditDep = ()=>{
    const navigate = useNavigate();
    const {id} = useParams();
    const idData = Card.find((x)=>x.healthNo === id)
    const index = Card.findIndex((y)=>y.healthNo === id)
    console.log("Index of editPage->",index)

    const[fname,setFname] = useState(idData.fname);
    const[lname,setLname] = useState(idData.lname);
    const[gender,setGender] = useState(idData.gender);
    const[height,setHeight] = useState(idData.height);
    const[weight,setWeight] = useState(idData.weight);
    const[dob,setDob] = useState(idData.dob)
    const[email,setEmail] = useState(idData.email);
    const[phone,setPhone] = useState(idData.phone)
    const[passport,setPassport] = useState(idData.passport);
    const[healthNo,setHealthNo] = useState(idData.healthNo);

    // var index = Card.map((x)=>{
    //     return x.healthNo;
    // }).indexOf(healthNo)
    // console.log("index",index)




    const[fnameErrMsg,setFnameErrMsg] = useState("");
    const[lnameErrMsg,setLnameErrMsg] = useState("");
    const[genderErrMsg,setGenderErrMsg] = useState("");
    const[heightErrMsg,setHeightErrMsg] = useState("");
    const[weightErrMsg,setWeightErrMsg] = useState("");
    const[dobErrMsg,setDobErrMsg] = useState("")
    const[passportErrMsg,setPassportErrMsg] = useState("");
    const[healthErrMsg,setHealthErrMsg] = useState("");

    const[fnameValidate,setFnameValidate] = useState(false);
    const[lnameValidate,setLnameValidate] = useState(false);
    const[genValidate,setGenValidate] = useState(false);
    const[heiValidate,setHeiValidate] = useState(false);
    const[weiValidate,setWeiValidate] = useState(false);
    const[dobValidate,setDobValidate] = useState(false);
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
        setPassportErrMsg("");
        setHealthErrMsg("");
        setFnameValidate(false)
        setLnameValidate(false)
        setGenValidate(false)
        setHeiValidate(false)
        setWeiValidate(false)
        setDobValidate(false)
        setPassValidate(false)
        setHealthValidate(false)

        if(fname === ""){
            flag = false
            setFnameErrMsg("Please enter First Name")
            setFnameValidate(true)
        }
        if(lname === ""){
            flag = false;
            setLnameErrMsg("Please enter Last Name")
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
        if(passport === ""){
            flag = false;
            setPassportErrMsg("Please enter Passport Number")
            setPassValidate(true)
        }
        if(healthNo === ""){
            flag = false
            setPassportErrMsg("Please enter Health Number")
            setHealthValidate(true)
        }
        if(flag === true){
            // const aa = {fname,lname,gender,height,weight,dob,email,phone,passport,healthNo}
            // const aJson = JSON.stringify(aa)
            // console.log(aJson)
            //const ass = Card.push({fname,lname,gender,height,weight,dob,email,phone,passport,healthNo})
            //Card.splice(index,{fname,lname,gender,height,weight,dob,email,phone,passport,healthNo})

            const updated = {fname,lname,gender,height,weight,dob,email,phone,passport,healthNo};
            const updateObj = Object.assign({},updated)
            Card.splice(index,index,updateObj)
            // Card.push(updateObj)
            
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
            navigate("/profileCard")
        }
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
                    <h1 style={{textAlign:"center"}} className={style.logo}>Update Dependents</h1>
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
                                        <input type="text" className={`form-control ${heiValidate ? "error":""}`}  placeholder="Enter your Height" value={height} onChange={handleHeight}/>
                                        {heightErrMsg?.length > 0 && (
                                            <p className={style.msg}>{heightErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Weight(kg)</label>
                                        <input type="text" className={`form-control ${weiValidate ? "error":""}`}  placeholder="Enter your Weight" value={weight} onChange={handleWeight}/>
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
                                        <input type="email" className={`form-control`}  placeholder="Enter your Email" value={email} onChange={handleEmail}/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Phone Number(optional)</label>
                                        <input type="text" className={`form-control`}  placeholder="Enter your Phone no" value={phone} onChange={handlePhone}/>
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
                                    <input type="text" className={`form-control ${healthValidate ? "error":""}`}  placeholder="57764646" value={healthNo} onChange={handleHealth} readOnly/>
                                    {healthErrMsg?.length > 0 && (
                                        <p className={style.msg}>{healthErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <button className="btn btn-success" onClick={handleAddDep}>Save Changes</button>
                                <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
            </div>
        </div>
        </>
    )
}
export default EditDep;