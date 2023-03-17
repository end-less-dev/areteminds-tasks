import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fix-sidebar" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/home" activeClassName="activeClicked" title="Home">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/editProfile" activeClassName="activeClicked" title="Edit Profile">
              <CDBSidebarMenuItem icon="user">Edit Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/changePassword" activeClassName="activeClicked" title="Change Password">
              <CDBSidebarMenuItem icon="pen">Change Password</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/list" activeClassName="activeClicked" title="User List">
              <CDBSidebarMenuItem icon="list">List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/personalInfo" activeClassName="activeClicked" title='Personal Information'>
              <CDBSidebarMenuItem icon="info">Personal Info</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addItems" activeClassName="activeClicked" title="Add Items">
              <CDBSidebarMenuItem icon="plus">Add Items</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profileCard" activeClassName="activeClicked" title="Profile Card">
              <CDBSidebarMenuItem icon="table">Profile Card</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/superAdmin" activeClassName="activeClicked" title="Super Admin">
              <CDBSidebarMenuItem icon="list">Super Admin</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/superAdminCurl" activeClassName="activeClicked" title="Super Admin Curl">
              <CDBSidebarMenuItem icon="list">Super Admin Curl</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          {/* <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div> */}
          <NavLink exact to="/" activeClassName="activeClicked" title="Log Out">
              <CDBSidebarMenuItem icon="user">Log Out</CDBSidebarMenuItem>
            </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;