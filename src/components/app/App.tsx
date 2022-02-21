import * as React from 'react';
import { BrowserRouter,  Routes,  Route } from "react-router-dom";
import { Home } from '../pages/home';
import { SearchPage } from '../pages/searchPage';

import './App.scss';
import Search from '../Search/Search';

export const App = () => ( 
  <BrowserRouter>
  <Search/>
    <Routes>     
         <Route index element={<Home />} />
         <Route path="searchPage" element={<SearchPage />} />
    </Routes>
  </BrowserRouter>
);