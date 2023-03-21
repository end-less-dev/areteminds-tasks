import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ORDERS } from "../utils/constant";

const ViewOrders = ()=>{
    
    const {id} = useParams();
    const[data,setData] = useState([]);
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
    
    const value = data.filter((res)=>res.orderNumber === id)
    console.log("Values",value)

    const OrderNoo = value.map((x)=>x.orderNumber)
    const customerName = value.map((x)=>x.userDetails.firstName)
    const amount = value.map((x)=>x.total)
    const status = value.map((x)=>x.orderStatus)
    const tax = value.map((x)=>x.salesTax)
    const tip = value.map((x)=>x.tip)
    const serviceCharge = value.map((x)=>x.serviceCharges)

    const produtList = value.map((x)=>x.productList)
    console.log("productList",produtList)

    const extractedData = produtList.flatMap(array =>
        array.map(({ name, price, quantity }) => ({
            name,
            quantity,
            price,
        }))
    );
    console.log("ExtractedData",extractedData)
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
                                <input type="text" class="form-control inp-shadow" value={OrderNoo} readOnly disabled/>
                            </div>
                        </div>
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">CUSTOMER NAME</label>
                                <input type="text" class="form-control inp-shadow" value={customerName} readOnly disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">AMOUNT</label>
                                <input type="text" class="form-control inp-shadow" value={amount} readOnly disabled/>
                            </div>
                        </div>
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">STATUS</label>
                                <input type="text" class="form-control inp-shadow" value={status} readOnly disabled/>
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
                            <tbody>
                               {extractedData.map((x)=>{
                                return(
                                    <tr>
                                        <td>{x.name}</td>
                                        <td>{x.quantity}</td>
                                        <td>${x.price}</td>
                                    </tr>
                                )
                               })}
                            </tbody>
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
                                <input type="text" class="form-control inp-shadow" value={tax} readOnly disabled/>
                            </div>
                        </div>
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">TIP</label>
                                <input type="text" class="form-control inp-shadow" value={tip} readOnly disabled/>
                            </div>
                        </div>
                        <div className="col-md">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">SERVICE CHARGE</label>
                                <input type="text" class="form-control inp-shadow" value={"$ "+serviceCharge} readOnly disabled/>
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