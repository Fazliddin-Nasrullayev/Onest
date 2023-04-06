import React, { useState } from 'react';
import './Sidebar.css'
import House from './components/House.jsx';
import { ReactComponent as Logo } from '../../components/assets/images/sidebar/logo.svg';
import { ReactComponent as Back } from '../../components/assets/images/sidebar/back.svg';
import { ReactComponent as Hamburger } from '../../components/assets/images/sidebar/hamburger.svg';

const Sidebar = () => {

    const [ animate , setAnimate ] = useState(false)

    const AnimateFunc = () => {
        setAnimate(!animate)
    }

    return (
        <section className='sidebar'>
        {/* <div className='container'> */}

            <div className={`sidebar_wrapper ${animate ? 'q' : 'q1 '} `} onClick={()=> AnimateFunc()} >
                <div className='sidebar_wrapper_content '>

                </div>

                <div className=' sidebar_wrapper_wrapper ' >
               
                     <div className='sidebar_wrapper_main'> <Logo className='sidebar_wrapper_main_logo' /> Onest <Hamburger className='sidebar_wrapper_main_hamburger' /> 
                     </div>
                <div className='fadingEffect'>
                </div>
                  <div className='sidebar_wrapper_out'>
                        <House />
                    </div>
                </div>
            </div>
        {/* </div> */}
        
        </section>
    );
};

export default Sidebar;