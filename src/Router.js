import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CardsContainer from './pages/CardsContainer';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
