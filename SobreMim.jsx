import { MotionConfig } from 'framer-motion'
import React from 'react'
import foto from './sobre-mim-lilhiro.jpg'
import {ScrollContainer, ScrollPage, Animator, MoveOut} from 'react-scroll-motion'
const SobreMim = () => {
    return (
        <div className='sobre-mim'>
            <div className='sm-grid'>
                <div className='image-container'>
                    <ScrollContainer>
                        <ScrollPage page={0}>
                            <Animator animation={MoveOut(0,200)}>
                                <img src={foto} ></img>
                            </Animator>
                        </ScrollPage>
                    </ScrollContainer>
                </div>
                <h1>
                    saghfjsh sdjhfg
                </h1>
                <div>
                    aksdjhfskajksja jshfkjshfksjh dsjkhfkajshfkj hksjdhfksjfhskljd hskdjfhksjdfhklj hfaskljhf kjash fska ashfgsj khfgsjhfg sajkhfg sajkfhgs ajkfhgsa fjkhsdgf jksdahfg skajhfgasdkjf hsgadkfjh sdkjfhg sdkjfhgsd fkjhsagf jkashdg ajsdfh
                </div>
            </div>
        </div>
    )
}

export default SobreMim