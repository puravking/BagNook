import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate()
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [mobile,setMobile]=  useState("")
    const signupHandle = async (e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/signup",{
            username,
            password,
            mobile
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
                <input value = {mobile} onChange={(e)=>{
                    setMobile(e.target.value)
                }} type="text" placeholder='Mobile Number' />

                <input type="submit" value='Submit' />
            </form>
            <p className='cursor-pointer' onClick={()=>(navigate("/login"))}>Already have an account?Login</p>
        </div>
    )
}

export default Signup