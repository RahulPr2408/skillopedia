import React from 'react'
import "./VerificationPedingPage.css"
import background from "../assests/background.jpg"

const VerificationPedingPage = () => {
    return (
        <div className='verification_pending_page'>
            <img src={background} alt="background" className='back' />
            <h2 className='skillopedia_heading'>SKILLOPEDIA</h2>
            <div className='verification_pending_container'>
                <img src="" alt="" />
                <h5>Almost There !!</h5>
                <p>You will be able to login once your request to signup is <br /> verified and approved by the administrator.</p>
            </div>
        </div>
    )
}

export default VerificationPedingPage