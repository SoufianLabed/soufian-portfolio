import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Navigation() {
  return (
   

        <div
        style={{
          
        background: "#252A48"      
            
        }}
        className="shadow-xl font-dosis fixed left-0 mt-12 w-16 h-auto z-40  rounded-r-lg border-solid border-2 border-black  invisible max-w-xs " >
      <div className="mx-auto  text-center">
   
        <div className="text-white text-xl    ">
          {content.nav.links.map((link, index) => {
          
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="cursor-pointer block border-b border-black mt-auto mb-auto  " key={index}>
                 <LazyLoadImage width={35} className="mt-3 mb-3" to={link.to} effect="blur" src={link.img} alt={link.alt} />
                
                </span>
              </ScrollLink>
            
            );
          })}
        </div>
      </div>
    </div>


  );
}
