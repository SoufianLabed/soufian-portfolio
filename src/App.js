import logo from './logo.svg';
import './App.css';
import Typical from 'react-typical';
import Navigation from './Components/Navigation'
import Header from './Components/Header'
import Stack from './Components/Stack'
import School from './Components/School'
import content from './content/index';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Project from './Components/Project'



function App() {
  return (
    <div>
      <Header/>
      <Stack/>
      <School/>
      <Project/>
    </div>

    
  );
}

export default App;
