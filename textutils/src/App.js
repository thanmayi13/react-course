import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'dark');
      setInterval(() => {
        document.title = 'Textutils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install Textutils Now';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'warning');
      document.title = 'Textutils';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Textutils" abouttext="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About title="abouttext"/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
