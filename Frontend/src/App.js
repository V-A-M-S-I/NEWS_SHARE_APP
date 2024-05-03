import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsForm from './components/newsForm';
import News from "./components/news";
import NewsDetails from './components/newsdetails';
import Userheader  from "./components/userheader";
import AdminForm from "./components/AdminForm";
import AdminNews from "./components/AdminNews";
import Adminhome from "./components/Adminhome";
import Logins from "./components/logins";
import './App.css';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      
      <BrowserRouter>
      {isLoggedIn && <Userheader setSearchQuery={setSearchQuery} setSelectedDepartment={setSelectedDepartment}/>}
        <Routes>
          <Route path="/newsform" element={<NewsForm />} />
          <Route path="/news" element={< News searchQuery={searchQuery}  selectedDepartment={selectedDepartment} />} />
          <Route path="/" element={<Logins  setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/adminhome" element={<Adminhome selectedDepartment={selectedDepartment} searchQuery={searchQuery} />} />
          <Route path="/newsdetails" element={<NewsDetails />} /> 
          <Route path="/adminform" element={<AdminForm />} />
          <Route path="/adminnews" element={<AdminNews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
