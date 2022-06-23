import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enables or not
  
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  
  return (
    <>
    <Navbar title="Wordverse" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter The Text To Analyze"/>
    {/*<About/> */}
    </div>
    </>
  );
}

export default App;