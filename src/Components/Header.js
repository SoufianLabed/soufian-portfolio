import React from 'react';
import Typical from 'react-typical';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import useStartAnimation from '../hook/useStartAnimation';
import { Link as ScrollLink } from 'react-scroll';
import Ai from '../img/bg-Ai.svg'
import test from '../img/fuji.jpg'
import './header.css'
import Download from './Download'


export default function Header() {





  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  const animated = useStartAnimation();
  return (
    <div>
      
    <div
    
    style={{
      backgroundImage:`url(${test})`
      
    }}
    className=" bg-cover bg-fixed min-h-screen"
    id="header"
  >

      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between md:pl-20 ">
        <div className="w-full md:w-2/5 ">
      
        </div>

        <div className="font-dosis w-full md:w-3/5 text-center md:text-left my-56 ">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl text-white font-bold transform ${
              animated ? 'translate-y-0' : styleTranslate
            }  ${transition(2000)} `}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`text-2xl md:text-4xl text-gray-400 transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)} `}
          >
            

          </h1>

          
           <Download/>
         

          
        </div>



      </div>

      <div className="animated-bounce w-3/5 mx-auto   ">

      <div className="social-links">

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/soufian-labed/" rel="noopener noreferrer" target="_blank">
        <i  className="fa fa-linkedin-square " rel="noopener noreferrer" aria-hidden="true"/>
        </a>

        {/* Github */}
        <a href="https://github.com/SoufianLabed" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square " rel="noopener noreferrer" aria-hidden="true"/>
        </a>

        {/* Email */}
        <a href="mailto:labedsoufian@gmail.com" rel="noopener noreferrer" target="_blank" download>
        <i className="fa fa-envelope-o " rel="noopener noreferrer" aria-hidden="true"/>
        </a>

        </div>

      </div>


         
        
       </div>
       </div>
  );
}
