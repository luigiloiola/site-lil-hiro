import './App.css';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Transition from './elements/Transition';
import HomePage from './elements/HomePage';
import {AnimatePresence} from 'framer-motion'
import Clientes from './elements/Clientes';
import Navbar from './elements/Navbar';
import React from 'react';
import { useState } from 'react';
import SobreMim from './elements/SobreMim';


function App() {

    const location = useLocation();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)




    return (
        <div className='app'>
            <Transition>
                <AnimatePresence>
                    <Routes location={location} key={useLocation().key}>
                        <Route path = '/' element = {<HomePage/>}/>
                        <Route path='/clientes' element = {<Clientes />}/>
                        <Route path = '/SobreMim' element = {<SobreMim/>}/>
                    </Routes>
                </AnimatePresence>
            </Transition>
        </div>
    );
}

export default App;
