import React from 'react';
import './School.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function School() {
  return (
   

        <div className="" style={{background:"#eee"}}>


        <h1 className="text-5xl font-bold pt-10 pb-10 text-center text-black">School Degree</h1>     
        <VerticalTimeline>

            <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#6C7EE1', color: '#fff' }}

                        contentArrowStyle={{ borderRight: '7px solid  #6C7EE1' }}


                        iconStyle={{ background: '#6C7EE1', color: '#fff'}}
                        
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-bold">MASTER Dev Manager Fullstack</h3>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <br/><h4 className="vertical-timeline-element-subtitle font-bold">EFREI Paris <i style={{marginLeft: "10px"}} class="fa fa-calendar" aria-hidden="true"/> September 2021 - July 2023 <a href="http://odf.univ-paris13.fr/fr/offre-de-formation/feuilleter-le-catalogue-1/sciences-technologies-sante-STS/dut-CB/dut-informatique-program-vdtin-316-2.html" id="ecole"/></h4>
                        
                    
                    <p className="">The Master Dev Manager Full Stack Efrei Paris - 3iL aims to train dev experts, competent to contribute to and manage each stage of the creation cycle of a site or an application, from development to production. This master's degree delivers a level 7 RNCP title.</p>
                    <div className='px-5 pb-2 rounded-lg border-2 border-rose-600'style={{backgroundColor:"#333C83"}}>
                        <p style={{color:"white",fontWeight:"bold",fontSize:"17px"}}>PROGRAM</p>
                        <ul className="list-disc pl-4" >
                            <li>Web & Mobil Development</li>
                            <li>Data & Cloud</li>
                            <li>Artificial Intelligence</li>
                            <li>Numeric Business</li>
                            <li>Marketing</li>
                        </ul>
                    </div>
                

                    

            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#6C7EE1', color: '#fff' }}

            contentArrowStyle={{ borderRight: '7px solid  #6C7EE1' }}


            iconStyle={{ background: '#6C7EE1', color: '#fff'}}
            
            > 
            <h3 className="vertical-timeline-element-title text-xl font-bold">Bachelor's degree Conceptor / Developer </h3>
            <br/><h4 className="vertical-timeline-element-subtitle font-bold"><a href="https://www.efrei.fr/" className='font-bold' id="ecole">EFREI Paris</a><i style={{marginLeft:"10px"}}class="fa fa-calendar" aria-hidden="true"></i> September 2020 - July 2021</h4>
            
            <p className="description">The Bachelor Gobal Programming Conceptor / Developer offers students a specialization in the design and development of mobile applications in addition to object-oriented and n-tier applications. </p>

            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#6C7EE1', color: '#fff' }}

            contentArrowStyle={{ borderRight: '7px solid  #6C7EE1' }}


            iconStyle={{ background: '#6C7EE1', color: '#fff'}}
            
            >
            <h3 className="vertical-timeline-element-title text-xl font-bold">Computer Science Technology degree (DUT Informatique) </h3>
            <br/><h4 className="vertical-timeline-element-subtitle font-bold"><a href="http://odf.univ-paris13.fr/fr/offre-de-formation/feuilleter-le-catalogue-1/sciences-technologies-sante-STS/dut-CB/dut-informatique-program-vdtin-316-2.html" id="ecole">Université Sorbonne Paris Nord </a><i style={{marginLeft:"10px"}}class="fa fa-calendar" aria-hidden="true"></i> September 2018 - July 2020</h4>
            

            <p className="description">The objective of the DUT Informatique is to train professionals with a broad technical competence. Technologically competent, but also capable of maintaining working relationships with computer users and the holders of different functions in the company.</p>
            
            <div className='px-5  pb-2 rounded-lg border-2 border-rose-600'style={{backgroundColor:"#333C83"}}>
                <p style={{color:"white",fontWeight:"bold",fontSize:"17px"}}>PROGRAM</p>
                <ul className="list-disc pl-4">
                    <li>Mentored Project </li>
                    <li>Algorithm</li>
                    <li>Web and Mobile Development </li>
                    <li>Project Management</li>
                    <li>Mathematics</li>
                    <li>English</li>
                </ul>
            </div>
            

            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#6C7EE1', color: '#fff' }}

            contentArrowStyle={{ borderRight: '7px solid  #6C7EE1' }}


            iconStyle={{ background: '#6C7EE1', color: '#fff'}}
            
            >
                <h3 className="titre font-bold text-xl" > High-School Diploma/Degree scientific option</h3>
                <h4 className="vertical-timeline-element-subtitle font-bold"><a href="https://www.efrei.fr/" id="ecole">Jean Jacques Rousseau Sarcelles</a><i style={{marginLeft:"10px"}}class="fa fa-calendar" aria-hidden="true"></i> September 2017 - Juin 2018</h4>
                

       
            <p className="description">Obtained the Scientific High-School Diploma/Degree scientific option in Sarcelles.</p>


            </VerticalTimelineElement>

        </VerticalTimeline>
 
    </div>


  );
}
