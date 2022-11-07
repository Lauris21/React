import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import NotFound from './components/notFound/NotFound';
import DetailMovie from './pages/detail/DetailMovie';
import DetailSeries from './pages/detail/DetailSeries';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/:title" element={<DetailMovie />} />
          <Route path="/:title" element={<DetailSeries />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
