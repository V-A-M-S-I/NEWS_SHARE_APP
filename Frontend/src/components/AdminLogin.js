import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/adminlogin.css'
import img from '../images/News-handing.gif';
import vel from '../images/Veltech.png';

export default function AdminLogin({setIsLoggedIn}) {
    const navigate = useNavigate();
    
    const[details,setdetails]=useState({
        id:" ",
        password:""
    });
   
    const [error, setError] = useState("");

    const handlechange = (e)=>{
        setdetails({...details,[e.target.name]:e.target.value})
    }

    const handlesubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:8080/signin",details);
            console.log(response)
            setIsLoggedIn(true);
            navigate('/adminhome');
        }catch (error) {
            setError("Invalid credentials. Please try again.");
        }
        
    }


    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className='box2'>
                    <div>
                    <img src={vel} className='vel' alt="img" /> 
                    </div>
                    <img src={img} className='login' alt="img" />
                    <h1>ADMIN</h1>
                    <div className='id'>
                    <label>Admin-Id</label>
                        <input type='text' name='id' value={details.text} onChange={handlechange} /> 
                    </div>
                    <div className='pass'>
                    <label>Password</label>
                    <input type='password' name='password' className='vamsi' value={details.password} onChange={handlechange} />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button>Login</button>
                </div>
            </form>
        </>
    );
}








