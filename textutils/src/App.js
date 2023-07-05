import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


//import About from './components/About'
function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='grey';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
  }
}
  return (
    <>
{/*<Navbar title="Textutils" abouttext="About Textutils" />*/}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
 <div className="container"><TextForm heading
  ="Enter your Text here to analyse" mode={mode}/>
  </div>
{/*<About/> */} 
    </>
  );
}

export default App;
