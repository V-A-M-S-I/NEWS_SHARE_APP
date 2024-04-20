import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Styles/news.css'; 

export default function AdminNews() {
    const [news, setNews] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('http://localhost:8080/Admin')
            .then(res => {
                setNews(res.data); 
            })
            .catch(err => console.log('Error fetching news:', err));
    }, []);
    

    // Function to navigate to news details page
    const goToNewsDetails = (selectedNews) => {
        navigate('/newsdetails', { state: { newsItem: selectedNews } }); 
    };

    // Function to handle delete
    const handleDelete = (index) => {
        axios.delete(`http://localhost:8080/Admin/${index}`)
            .then(() => {
                setNews(prevNews => prevNews.filter((_, ind) => ind !== index));
            })
            .catch(err => console.error('Error deleting news:', err));
    };

    // Function to handle accept
    const handleAccept = async (newsItem) => {
        try {
            const response = await axios.post(`http://localhost:8080/Admin/accept/${newsItem._id}`);
            if (response.status === 200) {
                // Update the state to remove the accepted news item
                setNews((prevNews) => prevNews.filter((item) => item._id !== newsItem._id));
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error accepting news:', error);
        }
    };

    return (
        <div className='body'>
            <h1>ACCEPT NEWS</h1>
            <div className="news-container">
                {news && news.map((val, ind) => (
                    <div key={ind} className="news-card">
                        <img src={`http://localhost:8080/public/images/${val.image}`} alt='img' />
                        <h2>{val.title}</h2>
                        <div className="button-container">
                            <button onClick={() => goToNewsDetails(val)}>Read</button>
                            <button onClick={() => handleAccept(val)}>Accept</button>
                            <button onClick={() => handleDelete(ind)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
