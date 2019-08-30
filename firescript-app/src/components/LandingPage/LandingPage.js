import React from 'react'
// import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='landing-wrapper'>
            <Link to='/'>
                <h1 className='heading'>FireScript</h1>
            </Link>

            <div className='headline'>
                <h4>Do it for the Hacker Nation!</h4>
            </div>

            <div className='signup'>
                <Link to="/signup">
                    <button className='red-btn'>Sign up now!</button>
                </Link>
            </div>

            <div className='login-prompt'>
                <p>Already a member?</p>
            </div>

            <div className='login'>
                <Link to="/login">
                    <button className='green-btn'>Login here!</button>
                </Link>
            </div>

        </div>
    )
}

export default LandingPage