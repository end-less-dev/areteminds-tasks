import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ORDERS } from "../utils/constant";

const ViewOrders = ()=>{
    
    const {id} = useParams();
    const[data,setData] = useState([]);
    const[orderNo,setOrderNo] = useState("")
    useEffect(()=>{
        const apiFun = async ()=>{
            await axios.get(`${ORDERS}/${id}`)
            .then((res)=>{
                setData(res.data.orderResponseList)
                console.log("orderDetails",res.data.orderResponseList)
            })
            .catch((error)=>console.log(alert(error)))
        }
        apiFun();
    },[id])
    



    const navigate = useNavigate();
    const handleSave = ()=>{
        navigate("/orders")
    }

    return(
        <>
        <div className="container container-sm  container-md container-lg container-fluid">
            <br />
            <div className="d-flex justify-content-between">
                <h2>Order Details</h2>
                <button className="btn btn-primary" onClick={handleSave}>SAVE</button>
            </div>
            <hr />
            <div className="card" style={{background:"#C2AFF0"}}>
                <div className="card-body">
                    <h6>BASIC DETAILS</h6>
                    <div className="row">
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">ORDER NUMBER</label>
                                <input type="text" class="form-control inp-shadow" value={orderNo} readOnly disabled/>
                            </div>
                        </div>
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">CUSTOMER NAME</label>
                                <input type="text" class="form-control inp-shadow" readOnly disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">AMOUNT</label>
                                <input type="text" class="form-control inp-shadow" readOnly disabled/>
                            </div>
                        </div>
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">STATUS</label>
                                <input type="text" class="form-control inp-shadow" readOnly disabled/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="card" style={{background:"#C2AFF0"}}>
                <div className="card-body">
                    <h6>ITEM INFORMATION</h6>
                    <div className="table-responsive-sm table-responsive-md table-responsive-lg">
                        <table className="table table-striped text-center">
                            <thead>
                                <tr>
                                    <th scope="col">ITEM NAME</th>
                                    <th scope="col">QUANTITY</th>
                                    <th scope="col">ITEM AMOUNT</th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>
            </div>
            <br />
            <div className="card" style={{background:"#C2AFF0"}}>
                <div className="card-body">
                    <h6>OTHER INFORMATION</h6>
                    <div className="row">
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">TAX</label>
                                <input type="text" class="form-control inp-shadow" readOnly disabled/>
                            </div>
                        </div>
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">TIP</label>
                                <input type="text" class="form-control inp-shadow" readOnly disabled/>
                            </div>
                        </div>
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">SERVICE CHARGE</label>
                                <input type="text" class="form-control inp-shadow" readOnly disabled/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ViewOrders;