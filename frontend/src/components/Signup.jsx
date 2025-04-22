import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("");  // To display error message

    const signupHandle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/signup", {
                username,
                password,
                mobile
            });

            if (response.data._id) {
                // Successful signup, redirect to home page
                navigate("/home");
            } else {
                setError("Signup failed. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                <form onSubmit={signupHandle} className="space-y-4">
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder='Username'
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"  // Password input field
                        placeholder='Password'
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />

                    <input
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        type="text"
                        placeholder='Mobile Number'
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />

                    <div className="text-center">
                        <input
                            type="submit"
                            value='Sign Up'
                            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        />
                    </div>
                </form>

                {/* Display error message if there’s an issue */}
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}

                <p className="text-center mt-4">
                    <span className="text-gray-600">Already have an account?</span>
                    <span 
                        className="cursor-pointer text-green-500 hover:underline"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Signup;
