import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsForm from './components/newsForm';
import News from "./components/news";
import NewsDetails from './components/newsdetails';
import Userheader  from "./components/userheader";
import AdminForm from "./components/AdminForm";
import AdminNews from "./components/AdminNews";
import Adminhome from "./components/Adminhome";
import Userlogin from "./components/Userlogin";
import AdminLogin from "./components/AdminLogin";
import './App.css';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      
      <BrowserRouter>
      <Userheader setSearchQuery={setSearchQuery}/>
        <Routes>
          <Route path="/newsform" element={<NewsForm />} />
          <Route path="/" element={< News searchQuery={searchQuery} />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminhome" element={<Adminhome />} />
          <Route path="/newsdetails" element={<NewsDetails />} /> 
          <Route path="/adminform" element={<AdminForm />} />
          <Route path="/adminnews" element={<AdminNews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
