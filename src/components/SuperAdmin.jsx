import RestrauntSidebar from "./Restraunt/RestrauntSidebar";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react";
import { GET_ROLEBY_ID } from "./utils/constant";
import ReactPaginate from "react-paginate"


const SuperAdmin = ()=>{

    const navigate = useNavigate();
    const[response,setResponse] = useState("")
    const[user,setUser] = useState([])
    const[filterData,setFilterData] = useState([])
    const[searchTerm,setSearchTerm] = useState("");
    const[pageNumber,setPageNumber] = useState(0)
    const[postPerPage] = useState(10);
   
    useEffect(()=>{
        async function func(){
            await axios.get(GET_ROLEBY_ID)
            .then((res)=>{
                setUser(res.data)
                setFilterData(res.data.data)
                setResponse(res.status)
            })
            .catch((error)=>console.log(error))
        }
        func()
    },[searchTerm])
    console.log("API response",response)
    if (!user || user.length === 0) {
        return <div style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div class="spinner-grow text-primary" role="status" style={{height:"50px",width:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <span class="visually-hidden">Loading...</span>
      </div></div>
      } 
    console.log("unFilteredData",user);

    const handleSearch = (e)=>{
        setSearchTerm(e.target.value)
    }
    const handleFilter = ()=>{
        setFilterData(user.data.filter((x)=>{
            if(x.emailAddress !== null && x.userName !== null){
                const email = x.emailAddress.toLowerCase();
                const uname = x.userName.toLowerCase();
                if(email.includes(searchTerm) || uname.includes(searchTerm)){
                    return x
                }
            }
        }))
    }
    // if (!filterData || filterData.length === 0) {
    //     return <div>No data available.</div>;
    //   } 
    const clearFilter = ()=>{
        setSearchTerm("")
    }
    const handleCreate = ()=>{
        navigate("/createUser")
    }
    console.log("filteredDataTwo",filterData)
    console.log("length of filtered Array",filterData.length)

    const pageCount = Math.ceil(filterData.length / postPerPage)
    const handlePage = (e)=>{
        console.log(e.selected)
        setPageNumber(e.selected)
    }
    const displayData = filterData.slice(
        pageNumber * postPerPage, (pageNumber + 1) * postPerPage
    )
    return(
        <>
            <div className="layout-content">
                <RestrauntSidebar/>
                <div className="org-container">
                    
                        <h1 style={{textAlign:"center"}} className={style.logo}>Super Admin Data Entry Operator User</h1>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={handleCreate}><i class="bi bi-plus-lg" style={{fontWeight:"bold"}}></i>Create User</button>
                        </div>
                        <div className="filter-div">
                        <div className="filter-inputs">
                        <input type="text" class="form-control" id="myInput" placeholder="Search UserName / Email" value={searchTerm} onChange={handleSearch}/>
                        {/* <input type="email" class="form-control" id="myInput2" placeholder="Search Email"/> */}
                        </div>
                        <div className="filter-btns">
                            <button className="btn btn-primary" onClick={handleFilter}>Apply Filter</button>
                            <button className="btn btn-primary" onClick={clearFilter}>Clear Filter</button>
                        </div>
                    </div>
                        <br />
                        <div className="table-responsive-sm table-responsive-md table-responsive-lg">
                            <table class="table table-striped text-center" id="myTable">
                                <thead>
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayData && displayData.map((newData) => {
                                        return (
                                        <tr  key={newData.id}>
                                            <td>{newData.userName}</td>
                                            <td>{newData.firstName}</td>
                                            <td>{newData.emailAddress}</td>
                                            <td>{newData.phoneNumber}</td>
                                            <td><i class="bi bi-three-dots-vertical"></i></td>
                                        </tr>
                                        );
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
export default SuperAdmin;