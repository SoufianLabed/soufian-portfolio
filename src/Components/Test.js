import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';

changeColor(){
    this.setState({black: !this.state.black})
 }


export default function Test() {

    const [count, setCount] = useState(0);

 

  return (
    <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
  );
}
