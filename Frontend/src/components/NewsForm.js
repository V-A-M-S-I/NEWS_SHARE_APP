import React, { useState } from 'react';
import axios from 'axios'; 

export default function NewsForm() {
    const [formData, setFormData] = useState({
        Image:'',
        Date:'',
        Published:'',
        Title: '',
        selectedValue: '',
        Description: '', 
        Link: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Inside NewsForm component
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Image', formData.Image);
            formDataToSend.append('Date', formData.Date);
            formDataToSend.append('Published', formData.Published);
            formDataToSend.append('Title', formData.Title);
            formDataToSend.append('selectedValue', formData.selectedValue);
            formDataToSend.append('Description', formData.Description);
            formDataToSend.append('Link', formData.Link);
            const response = await axios.post("http://localhost:8080/news", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
                }
            });
            console.log('News added successfully:', response.data);
            // Reset the form after successful submission
            setFormData({
                Image: '',
                Date:'',
                Published:'',
                Title: '',
                selectedValue: '',
                Description: '',
                Link: ''
            });
        } catch (error) {
            console.error('Error adding news:', error);
        }
    };



    return (
        <>
            <form onSubmit={handleSubmit} >
            <div>
                <h1>
                    ADD NEWS
                </h1>
            </div>
            <div className='one'>
                    <label>Img</label>
                    <input type='file' name='Image' onChange={(e) => setFormData({ ...formData, Image: e.target.files[0] })} />
            </div>
            <div className='one'>
                <label>Date</label>
                <input type="datetime-local" name='Date' value={formData.Date} onChange={handleChange} /> 
            </div>
            <div className='one'>
                <label>Published By:</label>
                <input type="text" name='Published' value={formData.Published} onChange={handleChange} /> 
            </div>

                <div className='one'>
                    <label>Title</label>
                    <input type='text' name='Title' value={formData.Title} onChange={handleChange} />
                </div>

                <div className='one'>
                    <label htmlFor="dropdown">Select Department:</label>
                    <select id="dropdown" name='selectedValue' value={formData.selectedValue} onChange={handleChange}>
                        <option value="">Please select</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                    </select>
                </div>

                <div className='one'>
                    <label>Enter the News</label>
                    <textarea name='Description' value={formData.Description} onChange={handleChange} />
                </div>
                <div className='one'>
                    <label>Registration Link:</label>
                    <input type="text" name='Link' value={formData.Link} onChange={handleChange} />
                </div>

                <button type="submit">Add</button>
            </form>
        </>
    );
}
