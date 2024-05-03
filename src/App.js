import './app.scss';
import Home from './components/Pages/Home';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './App.css';

import Engagement from "./components/Pages/Engagement";
import Page404 from "./components/Pages/Page404";
import SearchPage from "./components/Pages/SearchPage";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/engagement' element={<Engagement/>}/>
                    <Route path='*' element={<Page404/>}/>
                    <Route path='/search' element={<SearchPage/>}/>
                </Routes>
            </Router>
        </>

    );
}

export default App;


