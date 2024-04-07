import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Card() {
    const [news, setNews] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8080/news')
            .then(res => setNews(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>NEWS : </h1>
            {
                news && news.map((val, ind) => {
                    return (
                        <div key={ind}>
                            <img src={`http://localhost:8080/public/images/${val.image}`} alt='img' />
                            <h2>Date & Time:{val.date}</h2>
                            <h3>Published By: {val.published}</h3>
                            <h2>TITLE : {val.title}</h2>
                            <h3>Department: {val.department}</h3>
                            <p>{val.description}</p>
                            <a href={val.link}>{val.link}</a>
                        </div>
                    )
                })
            }
        </div>
    )
}
