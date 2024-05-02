import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css'
import img from '../images/News-handing.gif';

export default function Userlogin() {
    const navigate = useNavigate(); 
    
    const [loginData, setLoginData] = useState({
        id: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/login", loginData);
            
            navigate('/');
        } catch (error) {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <img src={img} className='login' alt="img" />
                    <div className='id'>
                        <label>VTU-NO</label>
                        <input type="text" name='id' value={loginData.text} onChange={handleChange} />
                    </div>
                    <div className='pass'>
                        <label>PASSWORD</label>
                        <input type="password" className='vamsi' name='password' value={loginData.password} onChange={handleChange} />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button>Login</button>
                </div>
            </form>
        </>
    );
}