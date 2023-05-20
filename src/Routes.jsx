import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from '../src/home/Home'
import Services from "./services/Services";
import Teste from '../src/services/SliderShow';
import About from "../src/about/About";
import Contact from "../src/contact/Contact";

export default () => {

    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
        
    );

}