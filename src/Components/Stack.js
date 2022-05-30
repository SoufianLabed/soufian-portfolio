import React,{useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Stack.css';

import 'react-vertical-timeline-component/style.min.css';
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



import content from '../content';

export default function Stack() {
  const [count, setCount] = useState(0);

  const Progress2 = ({done}) => {
    const [style2, setStyle2] = React.useState({});
    
    setTimeout(() => {
      const newStyle2 = {
        opacity: 1,
        width: `${done}%`
      }
      
      setStyle2(newStyle2);
    }, 200);
    
    return (
      <div className="progress2">
        <div className="progress-done2" style={style2}>
          {done}%
        </div>
      </div>
    )
  }


  

  let opa = 1 


  return (
    <div class="TechnicalSkill">

    
    <div
      className="h-auto flex items-center justify-center flex-col"
      style={{
        background: '#eee',
      }}
      id="Stack"
    >
      <h1 className="text-5xl font-dosis font-bold mt-10">Technical Skills</h1>      
        
        <div className="flex flex-wrap justify-center m-5">
        
          {content.stack.tech[1].map((tech, index) => (
            <span
              key={index}
              className={`  h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center  m-2 ${
                index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
              }`}
            >
          


              <CircularProgressbarWithChildren  strokeWidth={6} value={tech.value} styles={buildStyles({
          
          pathColor: "#6C7EE1 ",
       
        })}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

                <LazyLoadImage className="p-8" effect="blur" src={tech.img} alt={tech.alt} />
               
              </CircularProgressbarWithChildren>
              
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center m-5">
        
          {content.stack.tech[0].map((tech, index) => (
            <span
              key={index}
              className={`  h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center  m-2 ${
                index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
              }`}
            >
              <CircularProgressbarWithChildren  strokeWidth={6} value={tech.value} styles={buildStyles({
          
          pathColor: "#6C7EE1 ",
       
        })}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

                <LazyLoadImage className="p-8" effect="blur" src={tech.img} alt={tech.alt} />
               
              </CircularProgressbarWithChildren>
              
            </span>

        
          ))}
        </div>
        
      </div>



        <div className="flex items-center justify-center flex-col py-16"   style={{
          background: '#eee',
         }}>

          <div class="md:grid md:grid-cols-2 md:grid-rows-2 w-8/12 " style={{backgroundColor:"#eee"}}>
            <div className="">
              <p className="font-dosis font-bold text-2xl mb-4 ml-4 ">UML</p>
              <Progress2  done="75"/>  
            </div>
            <div className="">
              <p className="font-dosis font-bold text-2xl mb-4 ml-4 ">Versionning (Git)</p>
              <Progress2  done="85"/>  
            </div>
            <div className="">
              <p className="font-dosis font-bold text-2xl mb-4 ml-4 ">Object-oriented programming</p>
              <Progress2  done="85"/>  
            </div>
            <div className="">
              <p className="font-dosis font-bold text-2xl mb-4 ml-4 ">Project management</p>
              <Progress2  done="95"/>  
            </div>
          </div>

        </div>

      </div>
  
    );
}
