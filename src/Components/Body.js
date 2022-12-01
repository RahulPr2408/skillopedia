import React from 'react'
import AdminDashboard from '../Pages/AdminDashboard'
import { useGlobalContext } from '../util/Context'
import AdminPendingRequest from './AdminPendingRequest'
import "./Body.css"
import Profile from './Profile'


const Body = () => {
    const { admin, profile, dashboard } = useGlobalContext()
    return (
        <div className='body_container'>
            {dashboard && <AdminDashboard />}
            {admin && <AdminPendingRequest />}
            {profile && <Profile />}
        </div>
    )
}

export default Body