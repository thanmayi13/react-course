import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'


//import About from './components/About'
function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)},1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","dark")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","warning")
  }
}
  return (
    <>
{/*<Navbar title="Textutils" abouttext="About Textutils" />*/}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container"><TextForm heading
  ="Enter your Text here to analyse" showAlert={showAlert} mode={mode}/>
  </div>
  {/*<About/> */} 
    </>
  );
}

export default App;
