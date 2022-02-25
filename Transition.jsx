import React from 'react';
import {motion,AnimatePresence} from 'framer-motion'
import Navbar from './Navbar';

const Transition = ({children}) => {
    return (
        <div className='transition-fake'>
                <AnimatePresence>
                    <motion.h1
                    className='hiroshi-jap'>シ</motion.h1>
                </AnimatePresence>
                {children}
                <Navbar/>
        </div>

    );
};

export default Transition;
