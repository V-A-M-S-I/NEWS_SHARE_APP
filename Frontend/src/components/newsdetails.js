import React from 'react';
import { useLocation } from 'react-router-dom'; 
import '../Styles/details.css';

export default function NewsDetails() {
    const location = useLocation();     
    const { newsItem } = location.state || {}; 

    // Check if newsItem exists before accessing its properties to prevent errors
    if (!newsItem) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            <h1>{newsItem.title}</h1>
            <div className='details-container'>
                <img src={`http://localhost:8080/public/images/${newsItem.image}`} alt='img' className='news-image' />
                <div className='info'>
                    <p>Date: {newsItem.date}</p>
                    <p className='department'>Department: {newsItem.department}</p>
                </div>
                <p>Published By: {newsItem.published}</p>
                <p>Description: {newsItem.description}</p>
                <a href={newsItem.link} className='registration-link'>Registration link: {newsItem.link}</a>
            </div>
        </>
    );
}
