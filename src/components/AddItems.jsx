import Sidebar from "./layouts";
import { useState } from "react";
import style from "./style.module.css"

const AddItems = ()=>{

     const[rowCount,setRowCount] = useState([]);
    // const add = ()=>{
    //     const data = {id : rowCount.length + 1}
    //     setRowCount([...rowCount,data])
    // }
    const handleDelete = (id)=>{
		setRowCount(rowCount.filter((row)=> row.id !== id))
	}

    const[itemId,setItemId] = useState("");
    const[design,setDesign] = useState("");
    const[productId,setProductId] = useState("");
    const[size,setSize] = useState("");
    const[price,setPrice] = useState("");
    const[quantity,setQuantity] = useState("");
    const[totalPrice,setTotalPrice] = useState("");

    const[idErrMsg,setIdErrMsg] = useState("")
    const[designErrMsg,setDesignErrMsg] = useState("");
    const[proIdErrMsg,setProIdErrMsg] = useState("");
    const[sizeErrMsg,setSizeErrMsg] = useState("");
    const[priceErrMsg,setPriceErrMsg] = useState("");
    const[quanErrMsg,setQuanErrMsg] = useState("");
    const[totPriceErrMsg,setTotpriceErrMsg] = useState("");

    const[idValidate,setIdValidate] = useState(false);
    const[desValidate,setDesValidate] = useState(false);
    const[prodValidate,setProdValidate] = useState(false);
    const[sizeValidate,setSizeValidate] = useState(false);
    const[priceValidate,setPriceValidate] = useState(false);
    const[quanValidate,setQuanValidate] = useState(false);
    const[totPriceValidate,setTotPriceValidate] = useState(false);

    const handleId = (e)=>{
        setItemId(e.target.value)
    }
    const handleDesign = (e)=>{
        setDesign(e.target.value)
    }
    const handleProduct = (e)=>{
        setProductId(e.target.value)
    }
    const handleSize = (e)=>{
        setSize(e.target.value)
    }
    const handlePrice = (e)=>{
        setPrice(e.target.value)
    }
    const handleQuantity = (e)=>{
        setQuantity(e.target.value)
    }
    const handleTotalprice = (e)=>{
        setTotalPrice(e.target.value)
    }
    const handleSave = (e)=>{
        e.preventDefault();
        let flag = true;
        setIdErrMsg("")
        setDesignErrMsg("");
        setProIdErrMsg("");
        setSizeErrMsg("")
        setPriceErrMsg("");
        setQuanErrMsg("");
        setTotpriceErrMsg("");
        setIdValidate(false)
        setDesValidate(false)
        setProdValidate(false)
        setSizeValidate(false);
        setPriceValidate(false)
        setQuanValidate(false)
        setTotPriceValidate(false)

        if(itemId === ""){
            flag = false;
            setIdErrMsg("Please enter Id");
            setIdValidate(true)
        }
        if(design === ""){
            flag = false;
            setDesignErrMsg("Please choose Design")
            setDesValidate(true)
        }
        if(productId === ""){
            flag = false
            setProIdErrMsg("Please enter Product Id")
            setProdValidate(true)
        }
        if(size === ""){
            flag = false;
            setSizeErrMsg("Please choose Size");
            setSizeValidate(true)
        }
        if(price === ""){
            flag = false;
            setPriceErrMsg("Please enter Price")
            setPriceValidate(true)
        }
        if(quantity === ""){
            flag = false
            setQuanErrMsg("Please enter Quantity")
            setQuanValidate(true)
        }
        if(totalPrice === ""){
            flag = false
            setTotpriceErrMsg("Please enter Total Price");
            setTotPriceValidate(true)
        }
        if(flag === true){

        }
    }

    return(
        <>
        <div className="layout-content">
            <Sidebar/>
            <div className="org-container">
                <div className="container">
                    <h1 style={{textAlign:"center"}} className={style.logo}>Add Items</h1>
                    <div className="table-responsive-sm table-responsive-md table-responsive-lg">
                        <table class="table table-striped text-center">
                            <thead>
                                <tr>
                                    <th>Item ID</th>
                                    <th>Design</th>
                                    <th>Product ID</th>
                                    <th>Size</th>
                                    <th>Price per pair</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rowCount.map((row)=>{
                                    return(
                                        <tr key={row.id} style={{textAlign:"center"}}>
                                            <td><input type="text" value={row.id}  className="inp-width"/></td>
                                            <td><input type="text"  className="inp-width"/></td>
                                            <td><input type="text"  className="inp-width"/></td>
                                            <td><input type="text"  className="inp-width"/></td>
                                            <td><input type="text"  className="inp-width"/></td>
                                            <td><input type="text"  className="inp-width"/></td>
                                            <td><input type="text"  className="inp-width"/></td>
                                            <td><button className="btn btn-danger" onClick={()=>handleDelete(row.id)}>Delete</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="wai">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Line Items</button>
                    </div>
                    {/* Modal */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Add Items</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Line Item Id</label>
                                <input type="text" className={`form-control ${idValidate ? "error":""}`}  placeholder="Please enter Id" onChange={handleId} />
                                {idErrMsg?.length > 0 && (
                                    <p >{idErrMsg}</p>
                                )}
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Design</label>
                                <select class="form-select" aria-label="Default select example" onChange={handleDesign}>
                                    <option selected>Designs</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Product Id</label>
                                <input type="text" class="form-control"  placeholder="Please enter Product Id" onChange={handleProduct}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Size</label>
                                <select class="form-select" aria-label="Default select example" onChange={handleSize}>
                                    <option selected>Choose Size</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Price per pair</label>
                                <input type="text" class="form-control"  placeholder="Please enter Id" onChange={handlePrice}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Quantity</label>
                                <input type="text" class="form-control"  placeholder="Please enter Id" onChange={handleQuantity}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Total Price</label>
                                <input type="text" class="form-control"  placeholder="Please enter Id" onChange={handleTotalprice}/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddItems;