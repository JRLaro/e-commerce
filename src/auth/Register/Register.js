import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <h1>Registration Page</h1>
            <button>
                <Link to='/home'> Home</Link>
            </button>
        </div>
    )
}

export default Register
