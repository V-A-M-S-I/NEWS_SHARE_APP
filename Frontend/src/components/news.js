import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Styles/news.css'; 

export default function News() {
    const [news, setNews] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8080/news')
            .then(res => setNews(res.data))
            .catch(err => console.log(err))
    }, [])

   // JSX in News component
return (
    <>
    <h1>NEWS</h1>
    <div className="news-container">
      
      {news && news.map((val, ind) => (
        <div key={ind} className="news-card">
          <img src={`http://localhost:8080/public/images/${val.image}`} alt='img' />
          <p>Date: {val.date}</p>
          <h3>Published By: {val.published}</h3>
          <h2>TITLE: {val.title}</h2>
        </div>
      ))}
    </div>
    </>
    
  );
  
}
