import React, { useState } from 'react';
import '../Styles/header.css';
import Newsimg from '../images/news.png';

export default function Userheader({ setSearchQuery,setSelectedDepartment}) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleclick=(e)=>{
    setSelectedDepartment(e.target.value);
  }
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/" title="Donate Books">
            <img src={Newsimg} className='logoimg' alt="img" />
          </a>
        </div>
        <div className="label">
          <a href="/newsform">ADDNews</a>
          <a href="/adminnews">VerifyNews</a>
        </div>
        <div className="one">
          <select id="dropdown" name="selectedValue" className="drop" onChange={handleclick}>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="PG">PG</option>
            <option value="Civil">Civil</option>
            <option value="Bio-Medical">Bio-Medical</option>
            <option value="Placement">Placement</option>
          </select>
        </div>
        <div className="search-bar">
          <div className="search-container">
            <input type="text" placeholder="Search" onChange={handleSearch} />
          </div>
        </div>
        <div className="icons">
          <a href="/profile" title="Profile" className="profile">
            <img src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png" className="iconsimg" alt="img" />
          </a>
        </div>
        <div>
          <a href="/" className="logout">Logout</a>
        </div>
      </nav>
    </>
  );
}
