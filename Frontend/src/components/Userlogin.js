import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/userlogin.css'
import img from '../images/News-handing.gif';
import vel from '../images/Veltech.png';

export default function Userlogin({setIsLoggedIn}) {
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
            setIsLoggedIn(true);
            navigate('/news');
        } catch (error) {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='box1'>
                    <div>
                    <img src={vel} className='vel' alt="img" /> 
                    </div>
                    <img src={img} className='login' alt="img" />
                    <h1>USER</h1>
                    <div className='id'>
                        <label>VTU-NO</label>
                        <input type="text" name='id' className='txt' value={loginData.text} onChange={handleChange} />
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