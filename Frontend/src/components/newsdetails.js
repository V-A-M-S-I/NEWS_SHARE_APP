// NewsDetails.js
import React from 'react';

export default function NewsDetails({ news }) {
  return (
    <div>
      <h1>{news.title}</h1>
      <img src={`http://localhost:8080/public/images/${news.image}`} alt='img' />
      <p>Date: {news.date}</p>
      <h3>Published By: {news.published}</h3>
      <h3>Department: {news.department}</h3>
      <p>{news.description}</p>
      <a href={news.link}>{news.link}</a>
    </div>
  );
}
