import React from 'react';

import {useEffect, useState} from 'react';

import useFetch from './useFetch';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Suppliers from './Suppliers';
import Home from './Components/Home';

function App() {


    return(
        <div id="main-container">
            <Navbar />

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Categories' element={<Categories/>}/>
                <Route path='/Suppliers' element={<Suppliers/>}/>
            </Routes>

            
                            
        </div>
    );
}

export default App;