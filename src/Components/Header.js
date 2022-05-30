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
import Typist from 'react-typist';


export default function Header() {

  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  const animated = useStartAnimation();
  return (
  
      
    <div className='h-screen header'>
    <div class="flex bg-white h-4/6 my-auto">
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 md:text-6xl">Soufian <span style={{color:"#1212ff"}}>LABED</span></h2>
                <p class="mt-2  text-gray-800 md:text-5xl title">Master Manager Dev FullStack at  <span style={{color:"#036bfc"}}>EFREI Paris</span></p>
                <div className="animate-bounce mt-3">
                  <Download />
                </div>
                <div className="social-links w-3/5 mx-auto pt-20 flex space-x-4">

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
        <div class="hidden lg:block lg:w-1/2" style={{clipPath:'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)'}}>
            <div class="h-full object-cover" style={{backgroundImage:"url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)"}}>
                <div class="h-full bg-black opacity-25">Hello</div>
            </div>
        </div>
        
    </div>
  </div> 
  );
}
