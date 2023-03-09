import Sidebar from "./layouts";
import { useState } from "react";
import style from "./style.module.css"
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';

const ProfileCard = ()=>{

    // Modal functions 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[modal,setModal] = useState(false)
    const modalClose = () => setModal(false)
    const modalShow = () => setModal(true)

    // Validations
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

    // form Data
    const[id,setId] = useState(0);
    const[formData,setFormData] = useState({
        id:0,
        fname:"",
        lname:"",
        gender:"",
        height:"",
        weight:"",
        dob:"",
        email:"",
        phone:"",
        passport:"",
        healthNo:""
    })
    const[cardData,setCardData] = useState([]);

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
        setFormData({...formData,fname:e.target.value})
    }
    const handleLname = (e)=>{
        setLname(e.target.value)
        setFormData({...formData,lname:e.target.value})
    }
    const handleGen = (e)=>{
        setGender(e.target.value)
        setFormData({...formData,gender:e.target.value})
    }
    const handleHeight = (e)=>{
        setHeight(e.target.value)
        setFormData({...formData,height:e.target.value})
    }
    const handleWeight = (e)=>{
        setWeight(e.target.value)
        setFormData({...formData,weight:e.target.value})
    }
    const handleDob = (e)=>{
        setDob(e.target.value)
        setFormData({...formData,dob:e.target.value})
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
        setFormData({...formData,email:e.target.value})
    }
    const handlePhone = (e)=>{
        setPhone(e.target.value)
        setFormData({...formData,phone:e.target.value})
    }
    const handlePass = (e)=>{
        setPassport(e.target.value)
        setFormData({...formData,passport:e.target.value})
    }
    const handleHealth = (e)=>{
        setHealthNo(e.target.value)
        setFormData({...formData,healthNo:e.target.value})
    }

    const handleAddDep = (e)=>{
        e.preventDefault();
        let flag = true;
        const incId = setId(id+1)
        setFormData({...formData,id:incId})
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
            const newData = (data)=>([...data,formData])
            setCardData(newData)
            setShow(false)
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
        }
    }

    const handleDelete = (data)=>{
		setCardData(cardData.filter((x)=>x.healthNo !== data))
	}
    return(
        <>
        <div className="layout-content">
            <Sidebar/>
            <div className="org-container">
                <h1 style={{textAlign:"center"}} className={style.logo}>Profile Card</h1>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <button className="btn btn-primary" style={{borderRadius:"12px"}} onClick={handleShow}>Add Dependents</button>
                </div>
                <hr />
                {/* Card */}
                <div className="myflex">
                    {cardData.map((data)=>{
                        return(
                            <div className="card" style={{width:"30%",backgroundColor:"#f1f1f1"}} key={data.healthNo}>
                                <div className="card-body">
                                    <div className="flex-con">
                                        <div className="one">
                                            <p>Full Name</p>
                                            <p>{data.fname}</p>
                                        </div>
                                        <div className="two">
                                            <i class="bi bi-pen-fill" style={{cursor:"pointer"}} onClick={modalShow}></i>
                                            <i class="bi bi-trash3-fill" style={{marginLeft:"5px",color:"red",cursor:"pointer"}} onClick={()=>{handleDelete(data.healthNo)}}></i>
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
                <Modal  show={show} onHide={handleClose} size="lg sm">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Dependents</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
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
                                    <input type="text" className={`form-control ${healthValidate ? "error":""}`}  placeholder="57764646" value={healthNo} onChange={handleHealth}/>
                                    {healthErrMsg?.length > 0 && (
                                        <p className={style.msg}>{healthErrMsg}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{display:"flex",justifyContent:"center"}}>
                        <Button variant="primary" onClick={handleAddDep}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* Update modal */}
                <Modal show={modal} onHide={modalClose} size="lg sm">
                    <Modal.Header closeButton>
                        <Modal.Title>Update Dependents</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                </Modal>
            </div>
        </div>
        </>
    )
}
export default ProfileCard;