import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
