import React from 'react'
import '../Styles/header.css'
import Newsimg from '../images/news.png'; 
export default function Userheader() {
  return (
    <>
        <nav class="navbar">
            <div class="logo">
                <a href="/" title="Donate Books">
                    <img src={Newsimg} alt="img" />
                </a>
            </div>
            <div class="label">
                <a href="/newsform">ADDNews</a>
                <a href="/adminnews">VerifyNews</a>
                
            </div>
            <div class="search-bar">
                <div class="search-container">
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div class="icons">
                
                <a href="/profile" title="Profile" class="profile">
                    <img src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png" alt="img" />
                </a>
                
                
            </div>
            <div>
                <a href="/" class="logout">Logout</a>
            </div>
            
            
        </nav>
    </>
  )
}
