import React from 'react'
import "./SignUpPage.css"
import background from "../assests/background.jpg"
import { Link } from 'react-router-dom'


const SignUpPage = () => {
    return (
        <div className='signup_page'>
            <img src={background} alt="background" className='back' />
            <h2 className='skillopedia_heading'>SKILLOPEDIA</h2>
            <div className='create_content_container'>
                <h3 className='welcome_heading'>WELCOME!</h3>
                <h4>Create Your Account now!</h4>
            </div>
            <div className='create_acc_container'>
                <h5>Create Account</h5>
                <div className='input_fields'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='Email address' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Password' />
                </div>
                <button type='submit'>Sign Up</button>
                <span>Already have an account ? <Link to="/login">Login</Link></span>
            </div>
        </div>
    )
}

export default SignUpPage