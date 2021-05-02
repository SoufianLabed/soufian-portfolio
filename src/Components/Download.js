import React, { Component } from 'react';
import Pdf from '../img/CV Soufian LABED.pdf';



class Download extends Component {

  render() {

    return (
        <div className = "ml-8 mt-9" >     
          <a style={{border:"solid 2px white",color:"white"}} className="rounded-lg p-2 text-2xl font-dosis  items-center justify-center" id="cv" href = {Pdf} target = "_blank">Show my Curriculum vitae</a><i style={{fontSize:"2em",color:"white",marginLeft:"10px"}} className="fa fa-file-pdf-o" rel="noopener noreferrer" aria-hidden="true"/>
        
        </div>


    );

  }
}

export default Download;