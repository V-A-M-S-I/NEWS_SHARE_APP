import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsForm from './components/newsForm';
import News from "./components/news";
import NewsDetails from './components/newsdetails';
import Userheader  from "./components/userheader";
import AdminForm from "./components/AdminForm";
import AdminNews from "./components/AdminNews";
import Adminhome from "./components/Adminhome";

import './App.css';


function App() {
  return (
    <>
      
      <BrowserRouter>
      <Userheader />
        <Routes>
          <Route path="/newsform" element={<NewsForm />} />
          <Route path="/" element={< News />} />
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
