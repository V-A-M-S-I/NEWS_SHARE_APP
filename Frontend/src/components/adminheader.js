import React, { useState } from 'react';
import '../Styles/header.css';
import Newsimg from '../images/news.png';

export default function Adminheader() {
    const [search, setSearch] = useState("");

    console.log(search);
   
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <a href="/" title="Donate Books">
                        <img src={Newsimg} alt="img" />
                    </a>
                </div>
                <div className="label">
                    <a href="/adminnews">VerifyNEWS</a>
                </div>
                <div className="search-bar">
                    <div className="search-container">
                        <input type="text" name='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                    </div>
                </div>
                <div className="icons">
                    <a href="/profile" title="Profile" className="profile">
                        <img src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png" alt="img" />
                    </a>
                </div>
                <div>
                    <a href="/" className="logout">Logout</a>
                </div>
            </nav>
        </>
    );
}
