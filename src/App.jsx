import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Register from "./components/Register";
import ThankYou from "./components/ThankYou";
import Login from "./components/Login";
import Home from "./components/Home";
import NewPassword from "./components/NewPassword";
import EditProfile from "./components/EditProfile";
import ChangePassword from "./components/ChangePassword";
import TestCountry from "./components/TestCountry";
import List from "./components/List";
import ViewList from "./components/ViewList";
import PersonalInfo from "./components/PersonalInfo";
import AddItems from "./components/AddItems";
import ProfileCard from "./components/ProfileCard";
import AddDep from "./components/AddDep";
import EditDep from "./components/EditDep";
import ViewDep from "./components/ViewDep";
import SuperAdmin from "./components/SuperAdmin";
import CreateUser from "./components/CreateUser";

const App =()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/thankYou" element={<ThankYou/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/newPassword" element={<NewPassword/>}/>
                <Route path="/editProfile" element={<EditProfile/>}/>
                <Route path="/changePassword" element={<ChangePassword/>}/>
                <Route path="/demo" element={<TestCountry/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/viewList/:id" element={<ViewList/>}/>
                <Route path="/personalInfo" element={<PersonalInfo/>}/>
                <Route path="/addItems" element={<AddItems/>}/>
                <Route path="/profileCard" element={<ProfileCard/>}/>
                <Route path="/addDep" element={<AddDep/>}/>
                <Route path="/editDep/:id" element={<EditDep/>}/>
                <Route path="/viewDep/:viewId" element={<ViewDep/>}/>
                <Route path="/superAdmin" element={<SuperAdmin/>}/>
                <Route path="/createUser" element={<CreateUser/>}/>
            </Routes>
        </Router>
    )
}
export default App;