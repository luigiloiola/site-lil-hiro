import React from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';



const Navbar = ({color}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const handleSameAdress = (adress) => {
        if (adress == location.pathname) {
            return
        } else {
            navigate(adress)
        }
    }

    const [openned, setOpenned] = useState(false);
    return (
        <nav>
            <a  className='shi-jap links' onClick={() => navigate('/')}>シ</a>
                <AnimatePresence>
                    {openned ? (
                        <motion.ul
                        key={'navbar-mobile'}
                        initial = {{x:'0'}}
                        animate = {{x:'-100vw'}}
                        exit = {{x:'100%',
                                transition:{
                                    duration:0.6,
                                    ease:[1, 0.01, 0.4, 1.01]
                                }}}
                        transition = {{duration:0.5, ease:[0.56, 0.02, 0, 1]}}
                        className='header'>
                            <li><a className='links' onClick={() => {handleSameAdress('/Transition'); setOpenned(false)}}>PORTIFOLIO</a></li>
                            <li><a className='links' onClick={() => {handleSameAdress('/Clientes'); setOpenned(false)}}>CLIENTES</a></li>
                            <li><a className='links' onClick={() => {handleSameAdress('/SobreMim'); setOpenned(false)}}>SOBRE MIM</a></li>
                        </motion.ul>):(
                        <>
                            <ul className='header'>
                                <li><a className='links' onClick={() => handleSameAdress('/Transition')}>PORTIFOLIO</a></li>
                                <li><a className='links' onClick={() => handleSameAdress('/Clientes')}>CLIENTES</a></li>
                                <li><a className='links' onClick={() => handleSameAdress('/SobreMim')}>SOBRE MIM</a></li>
                            </ul>
                        </>
                        
                    )}
                </AnimatePresence>
            <button className='open-menu-button' onClick={() => {openned ? setOpenned(false) : setOpenned(true)}}>
                    {openned ? (
                    <>
                        <motion.div
                        key={'side-bar1'}
                        initial = {{rotate:0}}
                        animate = {{rotate:'45deg', y:'230%'}}
                        exit ={{x:'100%'}}
                        transition = {{duration:0.3, delay:0.55}}
                        className='button-bars side-bar'></motion.div>
                        <motion.div     
                        key={'mid-bar'}
                        initial = {{rotate:0}}
                        animate = {{x:'-103%'}}
                        exit ={{x:'100%'}}
                        transition = {{duration:0.3, ease:[0.49, 0.15, 0, 1.01], delay:0.25}}
                        className='button-bars middle-bar'></motion.div>
                        <motion.div     
                        key={'side-bar2'}
                        initial = {{rotate:0}}
                        animate = {{rotate:'-45deg', y:'-230%'}}
                        exit ={{x:'100%'}}
                        transition = {{duration:0.3, delay:0.55}}
                        className='button-bars side-bar'></motion.div>    
                    </>) 
                    : 
                    (<>
                    <motion.div
                        key={'side-bar1'}
                        animate = {{rotate:0, y:0}}
                        initial = {{rotate:'45deg', y:'230%'}}
                        transition = {{duration:0.3, delay:0.25}}
                        className='button-bars side-bar'></motion.div>

                        <motion.div     
                        key={'mid-bar'}
                        animate = {{x:0}}
                        initial = {{x:'-103%'}}
                        transition = {{duration:0.3, ease:[0.49, 0.15, 0, 1.01], delay:0.55}}
                        className='button-bars middle-bar'></motion.div>

                        <motion.div     
                        key={'side-bar2'}
                        animate = {{rotate:0, y:0}}
                        initial = {{rotate:'-45deg', y:'-230%'}}
                        transition = {{duration:0.3, delay:0.25}}
                        className='button-bars side-bar'></motion.div>
                    </>)}        

            </button>
        </nav>
    );
};

export default Navbar;