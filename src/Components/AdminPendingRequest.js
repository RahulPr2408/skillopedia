import React from 'react'
import "./AdminPendingRequest.css"
import { user } from "../util/Data"
import { AiOutlineUser } from "react-icons/ai"
import { FaSearch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi"

const AdminPendingRequest = () => {
    return (
        <div className='adminpendingrequest_container'>
            <div className='adminpendingrequest_header'>
                <div className='adminpendingrequest_search'>
                    <FaSearch className='search_icon' />
                    <input type="text" placeholder="Search" className='search_input' />
                </div>
                <div className='adminpendingrequest_download'>
                    <FiDownload />
                </div>
            </div>
            <div className='adminpendingrequest_content'>
                <div className='header'>
                    <h4>Pending Requests</h4>
                </div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr className='row'>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody style={{ width: "100%" }}>
                            {user.map((item) => {
                                return <tr className='row_content'>
                                    <td ><AiOutlineUser className='td_icon' /></td>
                                    <td >{item.firstname}</td>
                                    <td >{item.lastname}</td>
                                    <td >{item.email}</td>
                                    <td><button className='table_btn_dec'>DECLINE</button></td>
                                    <td><button className='table_btn_acc'>ACCEPT</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminPendingRequest