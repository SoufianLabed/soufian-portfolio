import React, { Component } from 'react';
import Pdf from '../img/CV Soufian LABED.pdf';



class Download extends Component {

  render() {

    return (
        <div className = "mt-9" >     
          <a style={{border:"solid 2px "}} className=" font-semibold text-grey-900 rounded-lg p-2 lg:text-2xl items-center justify-center " id="cv" href = {Pdf} target = "_blank">Show my Curriculum vitae</a><i style={{fontSize:"2em",marginLeft:"10px"}} className="fa fa-file-pdf-o text-grey-900" rel="noopener noreferrer" aria-hidden="true"/>
        </div>
    );
  }
}

export default Download;