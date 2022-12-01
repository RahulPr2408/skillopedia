import React from 'react'
import "./Sidebar.css"
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { MdOutlineVerified } from "react-icons/md"
import { AiOutlineUser } from "react-icons/ai"
import { useGlobalContext } from '../util/Context'

const Sidebar = () => {

    const { showProfile, showAdmin, showDashboard } = useGlobalContext()

    return (
        <div className='sidebar_container'>
            <div className='sidebar_content'>
                <h3>SKILLOPEDIA</h3>
                <ul>
                    <li onClick={showDashboard}><AiFillHome className='icons' /><Link to="/skillopedia/admindashboard">Dashboard</Link></li>
                    <li onClick={showAdmin}><MdOutlineVerified className='icons' /><Link to="/skillopedia/admin">Admin</Link></li>
                    <li onClick={showProfile}><AiOutlineUser className='icons' /><Link to="/skillopedia/profile">Profile</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar