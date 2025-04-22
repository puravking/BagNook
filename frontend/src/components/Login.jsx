import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  // To display login error message

    const loginHandle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/login", {
                username,
                password,
            });

            if (response.data) {
                // Successful login, redirect to home page
                navigate("/home");
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <form onSubmit={loginHandle}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder='Username'
                    required
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"  // Password input field
                    placeholder='Password'
                    required
                />

                <input type="submit" value='Login' />
            </form>

            {/* Display error message if there’s an issue */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <p className='cursor-pointer' onClick={() => navigate("/signup")}>
                Don't have an account? Signup
            </p>
        </div>
    );
}

export default Login;
