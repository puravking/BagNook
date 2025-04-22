import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const signupHandle = async (e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/signup",{
            username,
            password,
        })
        if(response.data._id) {
            navigate("/home")
        }

    }
    return (
        <div>
            <form onSubmit={signupHandle}>
                <input value={username} onChange={(e)=>{
                    setUsername(e.target.value)
                }} type="text" placeholder='Username'/>

                <input value = {password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="text" placeholder='Password' />
                <input type="submit" value='Submit' />
            </form>
            <p className='cursor-pointer' onClick={()=>(navigate("/"))}>Don't have a Account? Signup</p>
        </div>
    )
}

export default Login