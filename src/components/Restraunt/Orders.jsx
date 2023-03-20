import RestrauntSidebar from "./RestrauntSidebar";
import { ORDERS } from "../utils/constant";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Orders = ()=>{
    const[data,setData] = useState([])
    useEffect(()=>{
        const apiFun = async ()=>{
            await axios.get(ORDERS)
            .then((res)=>{
                setData(res.data.orderResponseList)
                console.log(res.data.orderResponseList)
            })
            .catch((error)=>console.log(alert(error)))
        }
        apiFun();
    },[])
    // Pagination
    const postPerPage = 10
    const pageCount = Math.ceil(data.length / postPerPage)
    const[pageNumber,setPageNumber] = useState(0)
    const handlePage = (e)=>{
        console.log(e.selected)
        setPageNumber(e.selected)
    }
    const displayData = data.slice(
        pageNumber * postPerPage, (pageNumber + 1) * postPerPage
    )
    // View function
    const navigate = useNavigate();
    const viewOrd = (id)=>{
        navigate(`/viewOrders/${id}`)
    }
    return(
        <>
        <div className="layout-content">
            <RestrauntSidebar/>
            <div className="org-container">
                <h1>Orders</h1>
                <div className="table-responsive-sm table-responsive-md table-responsive-lg">
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">Order Number</th>
                                <th scope="col">Restraunt Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Placed Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {displayData.map((item)=>{
                                return(
                                    <tr key={item.id}>
                                        <td><a href="#/">{item.orderNumber}</a></td>
                                        <td>{item.restrauntName}</td>
                                        <td>${item.total}</td>
                                        <td>{item.userDetails.firstName}</td>
                                        <td>{item.orderPlacedDate}</td>
                                        <td>{item.orderStatus}</td>
                                        <td>
                                        <div class="btn-group dropstart">
                                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu text-center">
                                                <li type="button" style={{cursor:"pointer"}} onClick={()=>viewOrd(item.orderNumber)}>View</li>
                                            </ul>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <ReactPaginate     
                            previousLabel={'pre'}
                            nextLabel={'next'}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={6}
                            onPageChange={handlePage}
                            containerClassName={'pagination'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            nextLinkClassName={'page-link'}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Orders;