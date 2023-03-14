import Sidebar from "./layouts";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react";

const SuperAdmin = ()=>{

    const navigate = useNavigate();
    const[user,setUser] = useState([])
    const[filterData,setFilterData] = useState([])
    const[searchTerm,setSearchTerm] = useState("");
    useEffect(()=>{
        async function func(){
            await axios.get("http://44.193.1.40:8080/app/api/user/getUsersByRoleId/1")
            .then((res)=>{
                setUser(res.data)
                setFilterData(res.data.data)
            })
            .catch((error)=>console.log(error))
        }
        func()
    },[searchTerm])
   
    if (!user || user.length === 0) {
        return <div>No data available.</div>;
      } 
    console.log(user);

    const handleSearch = (e)=>{
        setSearchTerm(e.target.value)
    }
    const handleFilter = ()=>{
        setFilterData(user.data.filter((x)=>{
            if(x.user.emailAddress !== null){
                const email = x.user.emailAddress.toLowerCase();
                if(email.includes(searchTerm)){
                    return x
                }
            }
        }))
    }
    if (!filterData || filterData.length === 0) {
        return <div>No data available.</div>;
      } 
    const clearFilter = ()=>{
        setSearchTerm("")
    }
    const handleCreate = ()=>{
        navigate("/createUser")
    }
    console.log("filteredDataTwo",filterData)
    return(
        <>
            <div className="layout-content">
                <Sidebar/>
                <div className="org-container">
                    
                        <h1 style={{textAlign:"center"}} className={style.logo}>Super Admin Data Entry Operator User</h1>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={handleCreate}>Create User</button>
                        </div>
                        <div className="filter-div">
                        <div className="filter-inputs">
                        <input type="text" class="form-control" id="myInput" placeholder="Search Email" value={searchTerm} onChange={handleSearch}/>
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
                                    {filterData && filterData.map((newData) => {
                                        return (
                                        <tr  key={newData.user.id}>
                                            <td>{newData.user.userName}</td>
                                            <td>{newData.user.firstName}</td>
                                            <td>{newData.user.emailAddress}</td>
                                            <td>{newData.user.phoneNumber}</td>
                                            <td><i class="bi bi-three-dots-vertical"></i></td>
                                        </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </>
    )
}
export default SuperAdmin;