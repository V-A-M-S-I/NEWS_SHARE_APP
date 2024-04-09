import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Styles/news.css'; 

export default function News() {
    const [news, setNews] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('http://localhost:8080/news')
            .then(res => setNews(res.data))
            .catch(err => console.log(err));
    }, []);

    // Function to navigate to news details page
    const goToNewsDetails = (selectedNews) => {
        navigate('/newsdetails', { state: { newsItem: selectedNews } }); 
    };

    return (
        <>
            <h1>NEWS</h1>
            <div className="news-container">
                {news && news.map((val, ind) => (
                    <div key={ind} className="news-card" onClick={() => goToNewsDetails(val)}>
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
