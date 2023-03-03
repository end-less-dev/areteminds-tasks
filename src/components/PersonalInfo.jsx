import Sidebar from "./layouts";
import style from "./style.module.css"
import { useState } from "react";

const PersonalInfo = ()=>{

    // Age Calculate
    const[dateValue,setDateValue] = useState("");
    const handleDate =(e)=>{
        setDateValue(e.target.value)
    }
    const systemDate = new Date();
    const sysYear = systemDate.getFullYear();
    const inputDate = new Date(dateValue);
    const inputYear = inputDate.getFullYear()
    if(inputYear){
        var age = (sysYear-inputYear)
        console.log(age)
    }

    //Marital Status
    const[childBool,setChildBool] = useState(true);
    const[marital,setMarital] = useState("")
    const[optValue,setOptValue] = useState("")
    const handleOpt = (e)=>{
        setOptValue(e.target.value)
        console.log(e.target.value)
    }
    const handleMarital = (e)=>{
        setMarital(e.target.value)
        console.log(e.target.value)
        if(marital === "single"){
            setChildBool(true)
        }
        if(marital === "married"){
            setChildBool(true)
            setOptValue(0)
        }else{setChildBool(false)}
    }
    // Validations
    const[name,setName] = useState("")
    const[aadharNo,setAadharNo] = useState("");
    const[passportNo,setPassportNo] = useState("")
    const[passExpiry,setPassExpiry] = useState("");
    //const[ageValue,setAgeValue] = useState("");
    const[religion,setReligion] = useState("");
    const[nameErrMsg,setNameErrMsg] = useState("");
    const[aadharNoErrMsg,setAddharErrMsg] = useState("");
    const[passportErrMsg,setPassportErrMsg] = useState("");
    const[expiryErrmsg,setExpiryErrMsg] = useState("");
    const[dobErrMsg,setDobErrMsg] = useState("");
    //const[ageErrMsg,setAgeErrMsg] = useState("");
    const[reliErrMsg,setReliErrMsg] = useState("");
    const[marErrMsg,setMarErrMsg] = useState("");
    const[optErrMsg,setOptErrMsg] = useState("");
    const[nameValidate,setNameValidate] = useState(false);
    const[aadharNoValidate,setAadharNoValidate] = useState(false);
    const[passportValidate,setPassportValidate] = useState(false)
    const[expiryValidate,setExpiryValidate] = useState(false);
    const[dobValidate,setDobValidate] = useState(false);
    const[reliValidate,setReliValidate] = useState(false);
    const[marValidate,setMarValidate] = useState(false)
    const[optValidate,setOptValidate] = useState(false);

    //Regular Expressions
    let aadharNoRegEx = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
    let PassportRegEx = /^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$/;

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleAadharNo = (e)=>{
       // setAadharNo(e.target.value)
        setAadharNo( e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim())
        console.log(e.target.value.length)
    }
    const handlePassport = (e)=>{
        setPassportNo(e.target.value);
    }
    const handleExpiry = (e)=>{
        setPassExpiry(e.target.value);
    }
    const handleReli = (e)=>{
        setReligion(e.target.value)
    }

    const handleSave = e =>{
        e.preventDefault();
        let flag = true;
        setAddharErrMsg("")
        setNameErrMsg("")
        setPassportErrMsg("")
        setExpiryErrMsg("")
        setDobErrMsg("")
        setReliErrMsg("")
        setMarErrMsg("")
        setOptErrMsg("")
        setNameValidate(false)
        setAadharNoValidate(false)
        setPassportValidate(false)
        setExpiryValidate(false)
        setDobValidate(false)
        setReliValidate(false)
        setMarValidate(false)
        setOptValidate(false)

        if(name === ""){
            flag = false;
            setNameValidate(true)
            setNameErrMsg("Please enter the name")
        }
        if(aadharNo === ""){
            flag = false
            setAadharNoValidate(true)
            setAddharErrMsg("Please enter Aadhar Number")
        }
        if(aadharNo !== "" && aadharNoRegEx.test(aadharNo) === false){
            flag = false
            setAadharNoValidate(true)
            setAddharErrMsg("Please enter valid Aadhar Number")
        }
        if(aadharNo !== "" && aadharNo.length < 14){
            flag = false
            setAadharNoValidate(true)
            setAddharErrMsg("Aadhar number must be 12 digits")
        }
        if(passportNo === ""){
            flag = false
            setPassportValidate(true)
            setPassportErrMsg("Please enter Passport Number")
        }
        if(passportNo !== "" && PassportRegEx.test(passportNo) === false){
            flag = false
            setPassportValidate(true)
            setPassportErrMsg("Please valid Passport Number")
        }
        // if(passportNo !== "" && passportNo.length < 9){
        //     flag = false
        //     setPassportValidate(true)
        //     setPassportErrMsg("Passport Number must be 8 characters")
        // }
        if(passExpiry === ""){
            flag = false
            setExpiryValidate(true)
            setExpiryErrMsg("Please enter Passport Expiry date")
        }
        if(dateValue === ""){
            flag = false
            setDobValidate(true)
            setDobErrMsg("Please enter Date of Birth")
        }
        if(religion === ""){
            flag = false
            setReliValidate(true)
            setReliErrMsg("Please enter your Religion")
        }
        if(marital === ""){
            flag = false
            setMarValidate(true)
            setMarErrMsg("Please choose")
        }
        // if(optValue === ""){
        //     flag = false
        //     setOptValidate(true)
        //     setOptErrMsg("Please choose")
        // }
        if(marital === "married"){
            if(optValue === ""){
                flag = false
                setOptValidate(true)
                setOptErrMsg("Please choose")
            }
        }
        if(flag === true){
            window.alert("Saved")
        }
    }
    
    return(
        <>
            <div className="layout-content">
                <Sidebar/>
                <div className="org-container">
                    <div className="container">
                        <h1 style={{textAlign:"center"}} className={style.logo}>Personal Information</h1>
                        <div className="row">
                            <div className="col">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Addhar Number</label>
                                    <input type="text" className={`form-control ${aadharNoValidate ? "error":""}`} placeholder="Addhar Number"  maxLength={14} onChange={handleAadharNo}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                        }
                                    }}
                                    />
                                    {aadharNoErrMsg?.length > 0 && (
                                        <p className={style.msg}>{aadharNoErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name as per Addhar</label>
                                    <input type="text" className={`form-control ${nameValidate ? "error":""}`} placeholder="Name" onChange={handleName}/>
                                    {nameErrMsg?.length > 0 && (
                                        <p className={style.msg}>{nameErrMsg}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Passport Number</label>
                                    <input type="text" className={`form-control ${passportValidate ? "error":""}`}  placeholder="Passport Number"  onChange={handlePassport}
                                    />
                                    {passportErrMsg?.length > 0 &&(
                                        <p className={style.msg}>{passportErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Passport Expiry Date</label>
                                    <input type="date" className={`form-control ${expiryValidate? "error":""}`} onChange={handleExpiry}/>
                                    {expiryErrmsg?.length > 0 && (
                                        <p className={style.msg}>{expiryErrmsg}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
                                    <input type="date" className={`form-control ${dobValidate ? "error":""}`} onChange={handleDate}/>
                                    {dobErrMsg?.length > 0 && (
                                        <p className={style.msg}>{dobErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Age</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={age}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Religion</label>
                                    <input type="text" className={`form-control ${reliValidate ? "error":""}`}  onChange={handleReli}/>
                                    {reliErrMsg?.length > 0 && (
                                        <p className={style.msg}>{reliErrMsg}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col">
                                <label for="exampleFormControlInput1" class="form-label">Marital Status</label>
                                <select className={`form-select ${marValidate ? "error":""}`} aria-label="Default select example" onChange={handleMarital}>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                </select>
                                {marErrMsg?.length > 0 && (
                                    <p className={style.msg}>{marErrMsg}</p>
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label for="exampleFormControlInput1" class="form-label">Childrens</label>
                                <select className={`form-select ${optValidate? "error":""}`} aria-label="Default select example" style={{width:"50%"}} value={optValue} disabled={childBool} onChange={handleOpt}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                {optErrMsg?.length > 0 && (
                                    <p className={style.msg}>{optErrMsg}</p>
                                )}
                            </div>
                        </div>
                        <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                            <button class="btn btn-primary" onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalInfo;