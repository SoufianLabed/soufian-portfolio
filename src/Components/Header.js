import React from 'react';
import Typical from 'react-typical';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import useStartAnimation from '../hook/useStartAnimation';
import { Link as ScrollLink } from 'react-scroll';
import Ai from '../img/bg-Ai.svg'
import urlFuji from '../img/fuji.jpg'
import './header.css'
import Download from './Download'


export default function Header() {

  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  const animated = useStartAnimation();
  return (
  
      
    <div
    
    style={{backgroundImage:`url(${urlFuji})`}}
    className=" bg-cover bg-fixed h-screen flex items-center justify-center flex-col"
    id="header"
    >

      {/*
      
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

      */}

        <div className="font-dosis w-full md:w-3/5 text-center md:text-left m-auto">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold ">
            {content.header.text[0]}
          </h2>

          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold ">
            {content.header.text[1]}
          </h3>

          <div className="animate-bounce mt-3">
            <Download />
          </div>
         
        </div>

      <div className="social-links w-3/5 mx-auto">

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
     
  );
}
