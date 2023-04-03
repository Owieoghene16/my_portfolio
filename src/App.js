import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Main from './pages/main.jsx';

const App = () => (
  <BrowserRouter>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kindness-Okpugie_Portfolio</title>
      <link rel="canonical" href="#" />
    </Helmet>
    <Routes>
      <Route path='/' element={<Main />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
