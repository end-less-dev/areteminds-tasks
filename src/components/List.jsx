import axios from "axios";
import Sidebar from "./layouts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./utils/constant";
// import Pagination from "./utils/Pagination";
import ReactPaginate from "react-paginate";


const List = ()=>{
    const[items,setItems] = useState([]);
    const[searchTerm,setSearchTerm] = useState("");
    const[searchMail,setSearchMail] = useState("")
    const[filterData,setFilterData] = useState([]);
    const[currentPage,setCurrentPage] = useState(1)
    const hanlePage =(e)=>{
        console.log(e.selected)
        setCurrentPage(e.selected + 1)
    }
    useEffect(()=>{
        axios.get(`${API_URL}/?_page=${currentPage}&_limit=10`)
        .then((response)=>{
            setItems(response.data);
            setFilterData(response.data)
        })
        .catch((error)=>console.log(error))
    },[searchTerm,currentPage])

    // useEffect(()=>{
    //     setFilterData(items.filter((x)=>x.name.toLowerCase().includes(searchTerm.toLowerCase())))
    // },[searchTerm,items]);

    const handleFilter = ()=>{

        const fill = items.filter((x)=>{
            if(x.name.toLowerCase().includes(searchTerm.toLowerCase()) && (x.email.toLowerCase().includes(searchMail.toLowerCase()))){
                return true
            }
        })
        setFilterData(fill)
    }
    const clearFilter = ()=>{
        setSearchTerm("")
        setSearchMail("")
        //setFilterData(items.filter((x)=>x.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    const handleInput = (e)=>{
        setSearchTerm(e.target.value)
    }
    // const handleInputMail = (e)=>{
    //     setSearchMail(e.target.value)
    // }
    const[name,setName]= useState("");
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const navigate = useNavigate();

    const view = (id)=>{
        navigate(`/viewList/${id}`)
    }
    console.log("length of filteredArrar",filterData.length)
    return(
        <>
        <div className="layout-content">
            <Sidebar/>
            <div className="org-container">
                <div className="filter-div">
                    <div className="filter-inputs">
                    <input type="text" class="form-control" id="myInput" placeholder="Search Name" value={searchTerm} onChange={handleInput}/>
                    {/* <input type="email" class="form-control" id="myInput2" placeholder="Search Email" value={searchMail} onChange={handleInputMail}/> */}
                    </div>
                    <div className="filter-btns">
                        <button className="btn btn-primary" onClick={handleFilter}>Apply Filter</button>
                        <button className="btn btn-primary" onClick={clearFilter}>Clear Filter</button>
                    </div>
                </div>
                <div className="table-responsive-sm table-responsive-md table-responsive-lg">
                    <table class="table table-striped" id="myTable" style={{textAlign:"center"}}>
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Post ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th> 
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filterData.map((data)=>{
                        return(
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.postId}</td>
                                <td value={name} onChange={handleName}>{data.name}</td>
                                <td>{data.email}</td>
                                <td><button className="btn btn-primary" onClick={()=>{view(data.id)}}>View</button></td>
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
                        pageCount={10}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={6}
                        onPageChange={hanlePage}
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
export default List;