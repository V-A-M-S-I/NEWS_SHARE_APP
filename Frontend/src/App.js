import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsForm from './components/newsForm';
import News from './components/news';
import NewsDetails from './components/newsdetails';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsForm />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsdetails" element={<NewsDetails />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
