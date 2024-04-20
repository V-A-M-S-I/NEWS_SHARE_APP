import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/news.css';

export default function Adminhome() {
    // Define state for news items
    const [news, setNews] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:8080/Admin/accept')
            .then(res => {
                // Filter out accepted news items
                const AcceptedNews = res.data.filter(newsItem => newsItem.status !== 'accepted');
                setNews(AcceptedNews);
            })
            .catch(err => console.log(err));
    }, []);
    
    

    const navigate = useNavigate();

    // Log the received news items
    console.log('Received news in Adminhome:', news);

    // Function to navigate to news details page
    const goToNewsDetails = (selectedNews) => {
        navigate('/newsdetails', { state: { newsItem: selectedNews } });
    };


    return (
        <>
            <div className='body'>
                <h1> NEWS</h1>
                <div className="news-container">
                    {news.length > 0 ? (
                        news.map((val, ind) => (
                            <div key={ind} className="news-card">
                                <img src={`http://localhost:8080/public/images/${val.image}`} alt='img' />
                                <h2>{val.title}</h2>
                                <div className="button-container"> 
                                    <button onClick={() => goToNewsDetails(val)}>Read</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No news items to display.</p>
                    )}
                </div>
            </div>
        </>
    );
}
