import { Country,State,City } from "country-state-city";
import { useState } from "react";
import style from "./style.module.css"
import "./index.css"
import Sidebar from "./layouts";

const EditProfile = ()=>{
    const country = Country.getAllCountries();
    const state = State.getAllStates();
    const city = City.getAllCities();
  
    // country-state-city functions
    const[countryValue,setCountryValue] = useState("")
    const handleCountry = (e)=>{
        setCountryValue(e.target.value)
    }
    const filtertedStates = state.filter((stateObj)=>{
        if(stateObj.countryCode === countryValue){
            return true
        }
    })
    const[stateValue,setStateValue] = useState("");
    const handleState = (e)=>{
        setStateValue(e.target.value);
    }
    const filtertedCites = city.filter((cityObj)=>{
        if(cityObj.stateCode === stateValue){
            return true
        }
    })
    // Validations/
    const[fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    const[email,setEmail] = useState("sanjay@gmail.com");
    const[phone,setPhone] = useState("");
    const[uname,setUname] = useState("");
    const[password,setPassword] = useState("");
    const[cityValue,setCityValue] = useState("");
    const[address,setAddress] = useState("");
    const[pincode,SetPincode] = useState("");

    // Regular Expression
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let pinCodeRegEx = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    let phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    const[fnameErrMsg,setFnameErrMsg] = useState("");
    const[lnameErrMsg,setLnameErrMsg] = useState("");
    const[emailErrMsg,setEmailErrMsg] = useState("");
    const[phoneErrMsg,setPhoneErrMsg] = useState("");
    const[unameErrMsg,setUnameErrMsg] = useState("");
    const[passErrMsg,setPassErrMsg] = useState("");
    const[countryErrMsg,setCountryErrMsg] = useState("");
    const[stateErrMsg,setStateErrMsg] = useState("");
    const[cityErrMsg,setCityErrMsg] = useState("");
    const[addErrMsg,setAddErrMsg] = useState("");
    const[pinErrMsg,setPinErrMsg] = useState("");

    const[fnameValidate,setFnameValidate] = useState(false);
    const[lnameValidate,setLnameValidate] = useState(false);
    const[emailValidate,setEmailValidate] = useState(false);
    const[phoneValidate,setPhoneValidate] = useState(false);
    const[unameValidate,setUnameValidatte] = useState(false);
    const[passValidate,setPassValidate] = useState(false);
    const[countryValidate,setCountryValidate] = useState(false);
    const[stateValidate,setStateValidate] = useState(false);
    const[cityValidate,setCityValidate] = useState(false);
    const[addValidate,setAddValidate] = useState(false);
    const[pinValidate,setPinValidate] = useState(false);

    const handleFname = (e)=>{
        setFname(e.target.value);
    }
    const handleLname = (e)=>{
        setLname(e.target.value);
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePhone = (e)=>{
        setPhone(e.target.value)
    }
    const handleUname = (e)=>{
        setUname(e.target.value)
    }
    const handlePass = (e)=>{
        setPassword(e.target.value)
    }
    const handleCity = (e)=>{
        setCityValue(e.target.value);
    }
    const handleAdd =(e)=>{
        setAddress(e.target.value);
    }
    const handlePin = (e)=>{
        SetPincode(e.target.value);
    }

    const hanldeSubmit = (e)=>{
        e.preventDefault();
        let flag = true;

        setFnameErrMsg("")
        setLnameErrMsg("");
        setEmailErrMsg("")
        setPhoneErrMsg("");
        setUnameErrMsg("")
        setPassErrMsg("")
        setCountryErrMsg("")
        setStateErrMsg("")
        setCityErrMsg("")
        setAddErrMsg("");
        setPinErrMsg("");

        setFnameValidate(false)
        setLnameValidate(false);
        setEmailValidate(false);
        setPassValidate(false);
        setUnameValidatte(false);
        setPhoneValidate(false);
        setCountryValidate(false);
        setCountryValidate(false);
        setStateValidate(false);
        setCityValidate(false);
        setAddValidate(false);
        setPinValidate(false)

        if(fname === ""){
            flag = false
            setFnameValidate(true);
            setFnameErrMsg("Please enter the First Name")
        }
        if(lname === ""){
            flag = false;
            setLnameValidate(true)
            setLnameErrMsg("Please enter the Last Name")
        }
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
        if(phone === ""){
            flag = false;
            setPhoneValidate(true)
            setPhoneErrMsg("Please enter the Phone Number")
        }
        if(phone !=="" && phoneRegEx.test(phone)=== false){
            flag = false;
            setPhoneValidate(true);
            setPhoneErrMsg("Please enter valid Phone number")
        }
        if(phone !=="" && phone.length < 10){
            flag = false;
            setPhoneValidate(true)
            setPhoneErrMsg("Phone number must be 10 digits")
        }
        if(uname === ""){
            flag = false
            setUnameValidatte(true)
            setUnameErrMsg("Please enter the Username")
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
        if(countryValue === ""){
            flag = false
            setCountryValidate(true)
            setCountryErrMsg("Please choose the Country")
        }
        if(stateValue === ""){
            flag = false
            setStateValidate(true)
            setStateErrMsg("Please choose the State");
        }
        if(cityValue === ""){
            flag = false;
            setCityValidate(true)
            setCityErrMsg("Please choose the City")
        }
        if(address === ""){
            flag = false;
            setAddValidate(true)
            setAddErrMsg("Please enter your Address")
        }
        if(pincode === ""){
            flag = false;
            setPinValidate(true)
            setPinErrMsg("Please enter the Pincode")
        }
        if(pincode !=="" && pinCodeRegEx.test(pincode)===false){
            flag = false
            setPinValidate(true)
            setPinErrMsg("Please enter valid Pincode")
        }
        if(pincode !=="" && pincode.length < 6){
            flag = false
            setPinValidate(true)
            setPinErrMsg("Pincode must be 6 digits")
        }
        if(flag === true){
            let arr = {fname,lname,email,phone,uname,password,countryValue,stateValue,cityValue,address,pincode}
            console.log(JSON.stringify(arr))
            window.alert("Profile Updated")
        }
    }
    return(
        <div className="layout-content">
            <Sidebar/>
            <div className="org-container">
            <div className="main">
        <div class="container" style={{width:"100%"}} >
        <h1 style={{textAlign:"center"}} className={style.logo}>Edit Profile</h1>
        <div class="row" >
                <div class="col-md">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                        <input type="text" className={`form-control ${fnameValidate? "error":""}`}  placeholder="John" onChange={handleFname}/>
                        {fnameErrMsg?.length>0 &&(
                            <p className={style.msg}>{fnameErrMsg}</p>
                        )}
                    </div>
                </div>
                <div class="col-md">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                        <input type="text" className={`form-control ${lnameValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Doe" onChange={handleLname}/>
                        {lnameErrMsg?.length>0 && (
                             <p className={style.msg}>{lnameErrMsg}</p>
                        )}
                    </div>
                </div>
            </div>
            <div class="row">
                    <div class="col-md">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" className={`form-control ${emailValidate? "error":""}`} id="exampleFormControlInput1" placeholder="example@gmail.com" onChange={handleEmail} value={email} disabled/>
                            {emailErrMsg?.length>0 && (
                                <p className={style.msg}>{emailErrMsg}</p>
                            )}
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input type="text" className={`form-control ${phoneValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter your phone number" onChange={handlePhone} onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }} maxLength={10}/>
                            {phoneErrMsg?.length > 0 && (
                                <p className={style.msg}>{phoneErrMsg}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">User Name</label>
                            <input type="text" className={`form-control ${unameValidate? "error":""}`} id="exampleFormControlInput1" placeholder="username" onChange={handleUname}/>
                            {unameErrMsg?.length>0 && (
                                <p className={style.msg}>{unameErrMsg}</p>
                            )}
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input type="password" className={`form-control ${passValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter your password" onChange={handlePass}/>
                            {passErrMsg?.length>0 && (
                                <p className={style.msg}>{passErrMsg}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Choose your country</label>
                            <select className={`form-select ${countryValidate? "error":""}`} aria-label="Default select example" onChange={handleCountry}>
                                <option selected>Choose Country</option>
                                {country.map((data)=>{
                                    return(
                                        <option value={data.isoCode}>{data.name}</option>
                                    )
                                })}
                            </select>
                            {countryErrMsg?.length>0 && (
                                <p className={style.msg}>{countryErrMsg}</p>
                            )}
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Choose your State</label>
                            <select className={`form-select ${stateValidate? "error":""}`} aria-label="Default select example" onChange={handleState}>
                                <option selected>Choose State</option>
                                {filtertedStates.map((data)=>{
                                    return(
                                        <option value={data.isoCode}>{data.name}</option>
                                    )
                                })}
                            </select>
                            {stateErrMsg?.length>0 && (
                                <p className={style.msg}>{stateErrMsg}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Choose your City</label>
                            <select className={`form-select ${cityValidate? "error":""}`} aria-label="Default select example" onChange={handleCity}>
                                <option selected>Choose City</option>
                                {filtertedCites.map((data)=>{
                                    return(
                                        <option>{data.name}</option>
                                    )
                                })}
                            </select>
                            {cityErrMsg?.length>0 && (
                                <p className={style.msg}>{cityErrMsg}</p>
                            )}
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Address</label>
                            <input type="text" className={`form-control ${addValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter your address" onChange={handleAdd}/>
                            {addErrMsg?.length>0 && (
                                <p className={style.msg}>{addErrMsg}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Pin Code</label>
                            <input type="text" className={`form-control pin-res ${pinValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter your Pincode" onChange={handlePin} onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }} maxLength={6} style={{width:"50%"}}/>
                            {pinErrMsg?.length>0 && (
                                <p className={style.msg}>{pinErrMsg}</p>
                            )}
                        </div>
                    </div>
                </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <button class="btn btn-primary" onClick={hanldeSubmit}>Update</button>
            </div>
        </div>
        </div>
            </div>
        </div>
    )
}
export default EditProfile;