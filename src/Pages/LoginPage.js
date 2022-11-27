import React from 'react'
import "./LoginPage.css"
import background from "../assests/background.jpg"
import { Link } from 'react-router-dom'


const LoginPage = () => {
    return (
        <div className='login_page'>
            <img src={background} alt="background" className='back' />
            <h2 className='skillopedia_heading'>SKILLOPEDIA</h2>
            <div className='content_container'>
                <h3 className='welcome_heading'>WELCOME!</h3>
                <h4>Use these awesome forms to login or create!</h4>
            </div>
            <div className='login_acc_container'>
                <h5>Login</h5>
                <div className='input_fields'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='Email address' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Password' />
                    <span><Link to="/forgotpassword">Forgot Password?</Link></span>
                </div>
                <button type='submit'>Login</button>
                <span>Don't have an account ? <Link to="/">Sign In</Link></span>
            </div>
        </div>
    )
}

export default LoginPage