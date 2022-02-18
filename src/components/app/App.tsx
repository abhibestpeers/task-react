import * as React from 'react';
import { BrowserRouter,  Routes,  Route } from "react-router-dom";
import { Home } from '../pages/home';
import { About } from '../pages/about';

import './App.scss';
import Search from '../Search/Search';

export const App = () => ( 
  <BrowserRouter>
  <Search/>
    <Routes>     
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);