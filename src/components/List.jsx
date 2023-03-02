import axios from "axios";
import Sidebar from "./layouts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./utils/constant";
const List = ()=>{
    const[items,setItems] = useState([]);
    const[searchTerm,setSearchTerm] = useState("");
    const[filterData,setFilterData] = useState([]);

    
    useEffect(()=>{
        axios.get(API_URL)
        .then((response)=>{
            setItems(response.data);
            setFilterData(response.data)
        })
        .catch((error)=>console.log(error))
    },[])

    // useEffect(()=>{
    //     setFilterData(items.filter((x)=>x.name.toLowerCase().includes(searchTerm.toLowerCase())))
    // },[searchTerm,items]);

    const handleFilter = ()=>{
        setFilterData(items.filter((x)=>x.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }
    const clearFilter = ()=>{
        setSearchTerm("")
        setFilterData(items.filter((x)=>x.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    const handleInput = (e)=>{
        setSearchTerm(e.target.value)
    }
    const[name,setName]= useState("");
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const navigate = useNavigate();

    const view = (id)=>{
        navigate(`/viewList/${id}`)
    }
    return(
        <>
        <div className="layout-content">
            <Sidebar/>
            <div className="org-container">
                <div className="filter-div">
                    <div className="filter-inputs">
                    <input type="text" class="form-control" id="myInput" placeholder="Search Name" value={searchTerm} onChange={handleInput}/>
                    {/* <input type="email" class="form-control" id="myInput2" placeholder="Search Email"/> */}
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
                </div>
            </div>
        </div>
        </>
    )
}
export default List;