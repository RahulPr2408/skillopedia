import React from 'react'
import Body from '../Components/Body'
import Sidebar from '../Components/Sidebar'
import "./Skillopedia.css"

const Skillopedia = () => {
    return (
        <div className='skillopedia_conatoiner'>
            <div className='skillopedia_body'>
                <Sidebar />
                <div className='skillopedia_content'>
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default Skillopedia