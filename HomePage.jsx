import {AnimatePresence, motion} from 'framer-motion';
import React, { useState } from 'react';
import Navbar from './Navbar';
import {useLocation} from 'react-router-dom';
import Demo from './Demo-hiroshi.mp4'




const HomePage = () => {

    const location = useLocation();
    const Variants = {
        initial:{x:'100%'},
        animate:{
            x:0,
            transition:{
                ease:[0.56, 0.02, 0, 1],
                duration:0.6,
                delay:0.3
            }
        },
        exit:{
            x:'100%',
            transition:{
                ease:[1, 0.01, 0.4, 1.01],
                duration:0.6,
            }
        }
    }
    


    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    React.useEffect(() => {
        function handleResize() {
        setWindowWidth(window.innerWidth)
    }
    
        window.addEventListener('resize', handleResize)
    })

    const videoMargin = -(1280-windowWidth)/2


    return (
        <motion.div
            variants={Variants}
            initial = 'initial'
            animate = 'animate'
            exit = 'exit'
            className='homepage'>
                <AnimatePresence>
                    {windowWidth >= 768 ? (
                        <motion.video key={location.pathname}
                            initial = {{x:'-100%'}}
                            animate = {{x:0,
                                        transition:{
                                            ease:[1, 0.01, 0.4, 1.01],
                                            duration:0.6
                                        }}}
                            exit = {{x:'-100%',
                                    transition:{
                                    ease:[1, 0.01, 0.4, 1.01],
                                    duration:0.6
                                }}}
                            height ='100%' autoPlay muted className='video-demo'>
                        <source src={Demo} type='video/mp4'></source>
                        </motion.video>
                    ):(
                        <motion.video key={location.pathname}
                            initial = {{x:'-100'}}
                            animate = {{x:0,
                                        transition:{
                                            ease:[1, 0.01, 0.4, 1.01],
                                            duration:0.6
                                        }}}
                            exit = {{x:'-100%',
                            transition:{
                            ease:[1, 0.01, 0.4, 1.01],
                            duration:0.6
                            }}}
                            height ='100%' autoPlay muted className='video-demo' style={{position:'absolute', left:videoMargin}}>
                            <source src={Demo} type='video/mp4'></source>
                        </motion.video>
                    ) }
                </AnimatePresence>
        </motion.div>
    );
};


export default HomePage;


//426