import React from 'react'
import './ForgotPasswordPage.css'
import background from "../assests/background.jpg"
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
    return (
        <div className='forgot_password_page'>
            <img src={background} alt="background" className='back' />
            <h2 className='skillopedia_heading'>SKILLOPEDIA</h2>
            <div className='content_container'>
                <h3 className='welcome_heading'>WELCOME!</h3>
                <h4>Use these awesome forms to login or create!</h4>
            </div>
            <div className='forgot_password_container'>
                <h5>Forgot Password</h5>
                <div className='input_fields'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Email address' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Password' />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name='confirmPassword' placeholder='Password' />
                </div>
                <button type='submit'>Change Password</button>

            </div>
        </div>
    )
}

export default ForgotPasswordPage