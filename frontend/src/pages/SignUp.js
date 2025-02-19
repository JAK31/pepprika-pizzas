import React from 'react'
import '../styles/Signup.css'
import { Link } from 'react-router-dom'
import { RiAdminFill } from 'react-icons/ri'
import { AiOutlineShopping } from 'react-icons/ai'

const SignUp = () => {
    const [userType, setUserType] = React.useState("customer");

    const handleUserType = () => {
        if (userType === "customer") {
            setUserType("admin");
        } else {
            setUserType("customer");
        }
    }
    return (
        <div className='login-container'>
            <div className="login-box">
                <h1 className="login-title">Sign Up</h1>
                <div className="customer-admin">
                    <div
                        className={`icon-part ${userType === "customer" ? "selected" : ""}`}
                        onClick={handleUserType}>
                        <RiAdminFill className='login-icons' />
                        <p>Customer</p>
                    </div>
                    <div
                        className={`icon-part ${userType === "admin" ? "selected" : ""}`}
                        onClick={handleUserType}>
                        <AiOutlineShopping className='login-icons' />
                        <p>Admin</p>
                    </div>
                </div>
                <div className="input-elements">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" id="first_name" name='first_name' />
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id="last_name" name='last_name' />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="date_of_birth" name='dob' style={{ width: "fit-content" }} />
                    </div>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name='email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id='password' />
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm_password" id='confirm_password' />
                </div>
                <button className='submit-btn btn'>Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
            </div>
            <div className='login-image-container'>
                <img src="https://www.bing.com/th?id=OIP.AsQJdDcAHXBnO6UuR7KUwwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Pizza boy" className='login-image' />
            </div>
        </div>
    )
}
export default SignUp