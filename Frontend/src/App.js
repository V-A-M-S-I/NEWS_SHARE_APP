import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsForm from './components/NewsForm';
import News from './components/news';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsForm />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
