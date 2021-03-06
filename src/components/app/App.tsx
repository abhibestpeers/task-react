import * as React from 'react';
import { BrowserRouter,  Routes,  Route } from "react-router-dom";
import { Home } from '../pages/home';
import { SearchPage } from '../pages/searchPage';

import './App.scss';

export const App = () => ( 
  <BrowserRouter>
    <Routes>     
         <Route index element={<Home />} />
         <Route path="searchPage" element={<SearchPage />} />
    </Routes>
  </BrowserRouter>
);