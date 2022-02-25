import React from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import { useState } from 'react';
import {useLocation, useNavigate} from'react-router-dom'
import Navbar from './Navbar';

const Clientes = ({pageTransition}) => {

    const [cor, setCor] = useState('rgb(23,23,23)')
    function opositecolor() {
        if (cor == 'rgb(23,23,23)') {
            return 'transparent'
        } else {
            return 'rgb(23,23,23)'
        }
    }

    function changeColor(color, color2) {
        if (cor == 'rgb(23,23,23)') {
            return color
        } else {
            return color2
        }
    }
    const navigate = useNavigate();

    const location = useLocation();

    return (
        <motion.main
        className='clients-section'
        initial={{x:'-100%'}}
        animate={{x:0,
            transition:{
                ease:[0.56, 0.02, 0, 1],
                duration:0.6,
                delay:0.6
            }}}
        exit={{x:'-100%',
                transition:{
                    ease:[1, 0.01, 0.4, 1.01],
                    duration:0.6
                }}}
        style = {{backgroundColor:cor, transition:'background-color 0.3s', overflow:'hidden',
                height:'100vh', width:'100%',
                position:'absolute', top:0}}>
            <AnimatePresence>
                <motion.ul key={location.pathname}
                        className='conteiner-clientes'
                        initial={{x:'100%'}}
                        animate={{x:0,
                            transition:{
                                ease:[0.56, 0.02, 0, 1],
                                duration:0.6,
                                delay:0.3
                            }}}
                        exit={{x:'100%',
                                transition:{
                                    ease:[1, 0.01, 0.4, 1.01],
                                    duration:0.6
                                }}}>
                    <li><a className='link-clients'
                    onClick={() => navigate('/')}
                    onMouseEnter={() => {setCor('whitesmoke')}}
                    onMouseLeave={() => {setCor('rgb(23,23,23)')}}
                    style={{backgroundColor:'rgba(0,0,0,0)', color:opositecolor(), transition:' 0.3s','-webkit-text-stroke':`1px ${changeColor('rgb(150,150,150)', 'transparent')}`}}>CLIENTE 1</a></li>
                    
                    <li><a className='link-clients'
                    onMouseEnter={() => {setCor('whitesmoke')}}
                    onMouseLeave={() => {setCor('rgb(23,23,23)')}}
                    style={{backgroundColor:'rgba(0,0,0,0)', color:changeColor('transparent' , 'rgb(150,150,150)'), transition:' 0.3s','-webkit-text-stroke':'1px rgb(150,150,150)'}}>CLIENTE 3</a></li>
                    
                    <li><a className='link-clients'
                    onMouseEnter={() => {setCor('whitesmoke')}}
                    onMouseLeave={() => {setCor('rgb(23,23,23)')}}
                    style={{backgroundColor:'rgba(0,0,0,0)', color:changeColor('transparent' , 'rgb(150,150,150)'), transition:' 0.3s','-webkit-text-stroke':'1px rgb(150,150,150)'}}>CLIENTE 3</a></li> 
                    
                    <li><a className='link-clients'
                    onMouseEnter={() => {setCor('whitesmoke')}}
                    onMouseLeave={() => {setCor('rgb(23,23,23)')}}
                    style={{backgroundColor:'rgba(0,0,0,0)', color:changeColor('transparent' , 'rgb(150,150,150)'), transition:' 0.3s','-webkit-text-stroke':'1px rgb(150,150,150)'}}>CLIENTE 3</a></li>
                </motion.ul>
            </AnimatePresence>
        </motion.main>
    );
};

export default Clientes;
