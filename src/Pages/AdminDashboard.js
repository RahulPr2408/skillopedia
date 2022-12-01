import React from 'react'
import "./AdminDashboard.css"
import { FaSearch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi"
import { user } from "../util/Data"
import { AiOutlineUser } from "react-icons/ai"

const AdminDashboard = () => {
    return (
        <div className='adminDashboard_container'>
            <div className='admindashboard_header'>
                <div className='admindashboard_search'>
                    <FaSearch className='search_icon' />
                    <input type="text" placeholder="Search" className='search_input' />
                </div>
                <div className='admindashboard_download'>
                    <FiDownload />
                </div>
            </div>
            <div className='admindashboard_content'>
                <div className='header'>
                    <h4>Team Member</h4>
                </div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr className='row'>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Skill Set</th>
                                <th>Role</th>
                                <th>Projects</th>
                            </tr>
                        </thead>
                        <tbody style={{ width: "100%" }}>
                            {user.map((item) => {
                                return <tr className='row_content'>
                                    <td ><AiOutlineUser className='td_icon' /></td>
                                    <td >{item.firstname}</td>
                                    <td >{item.lastname}</td>
                                    <td >{item.email}</td>
                                    <td >{item.skill_set}</td>
                                    <td >{item.role}</td>
                                    <td >{item.projects}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard