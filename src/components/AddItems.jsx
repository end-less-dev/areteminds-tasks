import Sidebar from "./layouts";
import { useState } from "react";
import style from "./style.module.css"
// import  $ from "jquery"
// import "bootstrap"
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';


const AddItems = ()=>{

    // Modal functions 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Validations 
    const[itemId,setItemId] = useState("");
    const[design,setDesign] = useState("");
    const[productId,setProductId] = useState("");
    const[size,setSize] = useState("");
    const[price,setPrice] = useState("");
    const[quantity,setQuantity] = useState("");
    const[totalPrice,setTotalPrice] = useState("");

      const[formData,setFormData] = useState({
        itemId:"",
        design:"",
        productId:"",
        size:"",
        price:"",
        quantity:"",
        totalPrice:""
    });

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
        //setFormData(formData.itemId[e.target.value])
        setFormData({...formData,itemId:e.target.value})
    }
    const handleDesign = (e)=>{
        setDesign(e.target.value)
        setFormData({...formData,design:e.target.value})
    }
    const handleProduct = (e)=>{
        setProductId(e.target.value)
        setFormData({...formData,productId:e.target.value})
    }
    const handleSize = (e)=>{
        setSize(e.target.value)
        setFormData({...formData,size:e.target.value})
    }
    const handlePrice = (e)=>{
        setPrice(e.target.value)
        setFormData({...formData,price:e.target.value})
    }
    const handleQuantity = (e)=>{
        setQuantity(e.target.value)
        setFormData({...formData,quantity:e.target.value})
    }
    
    const handleTotalprice = (e)=>{
        setTotalPrice(e.target.value)
        setFormData({...formData,totalPrice:e.target.value})
    }

    const[tableData,setTableData] = useState([])
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
            const newData = (data)=>([...data,formData])
            setTableData(newData)
            setItemId("")
            setDesign("")
            setProductId("")
            setPrice("")
            setSize("")
            setQuantity("")
            setTotalPrice("")
            setShow(false)
        }
    }
    const handleDelete = (itemId)=>{
		setTableData(tableData.filter((x)=>x.itemId !== itemId))
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
                                {tableData.map((x,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{x.itemId}</td>
                                            <td>{x.design}</td>
                                            <td>{x.productId}</td>
                                            <td>{x.size}</td>
                                            <td>{x.price}</td>
                                            <td>{x.quantity}</td>
                                            <td>{x.totalPrice}</td>
                                            <td><button onClick={()=>{handleDelete(x.itemId)}} style={{border:"none"}}>
                                                <i class="bi bi-trash3-fill" title="delete" style={{color:"red",cursor:"pointer"}}></i>
                                            </button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="wai">
                        <button className="btn btn-primary" onClick={handleShow}>Add Line Items</button>
                    </div>
                    </div>
                    {/* Modal */}
                    <Modal show={show} onHide={handleClose} size="lg sm">
                        <Modal.Header closeButton>
                        <Modal.Title>Add Items</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="row">
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Line Item Id</label>
                                        <input type="text" className={`form-control ${idValidate ? "error":""}`} value={itemId} placeholder="Please enter Id" onChange={handleId} />
                                        {idErrMsg?.length > 0 && (
                                            <p className={style.msg}>{idErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Design</label>
                                        <select className={`form-select ${desValidate ? "error":""}`} value={design} aria-label="Default select example" onChange={handleDesign}>
                                            <option selected>Designs</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        {designErrMsg?.length > 0 && (
                                            <p className={style.msg}>{designErrMsg}</p>
                                        )}
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Product Id</label>
                                        <input type="text" className={`form-control ${prodValidate ? "error":""}`}  value={productId} placeholder="Please enter Product Id" onChange={handleProduct}/>
                                        {proIdErrMsg?.length > 0 && (
                                            <p className={style.msg}>{proIdErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Size</label>
                                        <select className={`form-select ${sizeValidate ? "error":""}`} value={size} aria-label="Default select example" onChange={handleSize}>
                                            <option selected>Choose Size</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        {sizeErrMsg?.length > 0 && (
                                            <p className={style.msg}>{sizeErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Price per pair</label>
                                        <input type="text" className={`form-control ${priceValidate ? "error":""}`} value={price} placeholder="Please enter Price" onChange={handlePrice}/>
                                        {priceErrMsg?.length > 0 && (
                                            <p className={style.msg}>{priceErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Quantity</label>
                                        <input type="text" className={`form-control ${quanValidate ? "error":""}`} value={quantity} placeholder="Please enter Quantity" onChange={handleQuantity}/>
                                        {quanErrMsg?.length > 0 && (
                                            <p className={style.msg}>{quanErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="mb-3" style={{width:"50%"}}>
                                        <label for="exampleFormControlInput1" class="form-label">Total Price</label>
                                        <input type="text" className={`form-control ${totPriceValidate ? "error":""}`} value={totalPrice} placeholder="Please enter Total Price" onChange={handleTotalprice}/>
                                        {totPriceErrMsg?.length > 0 && (
                                            <p className={style.msg}>{totPriceErrMsg}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save
                        </Button>
                        </Modal.Footer>
                </Modal>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddItems;