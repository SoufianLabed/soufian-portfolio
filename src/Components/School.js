import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import night from '../img/night.jpg'


export default function School() {
  return (
   

        <div
        style={{
          
        backgroundImage: `url(${night})`     
            
        }} className="bg-cover bg-fixed">

        <VerticalTimeline>

            <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33,37,41,255 )', color: '#fff' }}

                        contentArrowStyle={{ borderRight: '7px solid  rgb(33,37,41,255)' }}


                        iconStyle={{ background: 'rgb(33,37,41,255)', color: '#fff'}}
                        
                    >
                        <h3 className="vertical-timeline-element-title">MASTER Dev Manager Fullstack</h3>
                        <br/><h4 className="vertical-timeline-element-subtitle"><a href="http://odf.univ-paris13.fr/fr/offre-de-formation/feuilleter-le-catalogue-1/sciences-technologies-sante-STS/dut-CB/dut-informatique-program-vdtin-316-2.html" id="ecole">EFREI Paris</a></h4>
                        
                    <h4 style={{borderRadius:"10px",opacity:"1",marginTop:"15px"}} className="date"><i style={{marginLeft:"10px"}}class="fa fa-calendar" aria-hidden="true"></i> September 2021 - July 2023</h4>
                    <p className="description">The Master Dev Manager Full Stack Efrei Paris - 3iL aims to train dev experts, competent to contribute to and manage each stage of the creation cycle of a site or an application, from development to production. This master's degree delivers a level 7 RNCP title.</p>
                    
                    <p style={{color:"white",fontWeight:"bold",fontSize:"17px"}}>PROGRAM</p>

                    <ul className="programme">
                        <li>Web & Mobil DEVELOPEMENT</li>
                        <li>DATA & CLOUD</li>
                        <li>IA</li>
                        <li>CYBERSECURITY</li>
                        <li>INTERACTIVES VR EXPERIENCES</li>
                        <li>NUMERIC BUSINESS</li>
                    </ul>

            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33,37,41,255 )', color: '#fff' }}

            contentArrowStyle={{ borderRight: '7px solid  rgb(33,37,41,255)' }}


            iconStyle={{ background: 'rgb(33,37,41,255)', color: '#fff'}}
            
            >
            <h3 className="vertical-timeline-element-title">Bachelor's degree Conceptor / Developer </h3>
            <br/><h4 className="vertical-timeline-element-subtitle"><a href="https://www.efrei.fr/" id="ecole">EFREI Paris</a></h4>
            <h4 style={{borderRadius:"10px",opacity:"1",marginTop:"15px"}} className="date"><i style={{marginLeft:"10px"}}class="fa fa-calendar" aria-hidden="true"></i> September 2020 - July 2021</h4>

            <p className="description">The Bachelor Gobal Programming Conceptor / Developer offers students a specialization in the design and development of mobile applications in addition to object-oriented and n-tier applications. </p>

            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33,37,41,255 )', color: '#fff' }}

            contentArrowStyle={{ borderRight: '7px solid  rgb(33,37,41,255)' }}


            iconStyle={{ background: 'rgb(33,37,41,255)', color: '#fff'}}
            
            >
            <h3 className="vertical-timeline-element-title">Computer Science Technology degree (DUT Informatique) </h3>
            <br/><h4 className="vertical-timeline-element-subtitle"><a href="http://odf.univ-paris13.fr/fr/offre-de-formation/feuilleter-le-catalogue-1/sciences-technologies-sante-STS/dut-CB/dut-informatique-program-vdtin-316-2.html" id="ecole">Université Sorbonne Paris Nord</a></h4>
            
            <h4 style={{borderRadius:"10px",opacity:"1",marginTop:"15px"}} className="date"><i style={{marginLeft:"10px"}}class="fa fa-calendar" aria-hidden="true"></i> September 2018 - July 2020</h4>
            <p className="description">The objective of the DUT Informatique is to train professionals with a broad technical competence. Technologically competent, but also capable of maintaining working relationships with computer users and the holders of different functions in the company.</p>

            <p style={{color:"white",fontWeight:"bold",fontSize:"17px"}}>program</p>

            <ul className="programme">
                <li>mentored project </li>
                <li>Algorithm</li>
                <li>Web and mobile development </li>
                <li>Project management</li>
                <li>Mathematics</li>
                <li>English</li>
            </ul>

            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33,37,41,255 )', color: '#fff' }}

            contentArrowStyle={{ borderRight: '7px solid  rgb(33,37,41,255)' }}


            iconStyle={{ background: 'rgb(33,37,41,255)', color: '#fff'}}
            
            >
                <h3 className="titre" > High-School Diploma/Degree scientific option</h3>
                <h4 className="vertical-timeline-element-subtitle"><a href="https://www.efrei.fr/" id="ecole">Jean Jacques Rousseau Sarcelles</a></h4><br/>
                

            <h4 style={{borderRadius:"10px",opacity:"1"}} className="date"><i style={{marginLeft:"10px"}}class="fa fa-calendar" aria-hidden="true"></i> September 2017 - Juin 2018 </h4>
            <p className="description">Obtained the Scientific High-School Diploma/Degree scientific option in Sarcelles.</p>


            </VerticalTimelineElement>

        </VerticalTimeline>
 
    </div>


  );
}
