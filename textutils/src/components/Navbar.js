import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  const blue = () => {
    document.body.style.backgroundColor='#99DBF5';
    document.body.style.visibility='50%';
   
  };
  const Green = () => {
    document.body.style.backgroundColor='#D0F5BE';
   
  };
  const Red = () => {
    document.body.style.backgroundColor='#FF2171';
    
  };
  const Yellow = () => {
    document.body.style.backgroundColor='#FFF9C9';
  
  };

return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.abouttext}</Link>
          </li>
        </ul>
        <span className='buttons'>
        <button type="button" onClick={blue} className="btn btn-info mx-1">Blue</button>
        <button type="button" onClick={Green} className="btn btn-success mx-1">Green</button>
        <button type="button" onClick={Red} className="btn btn-danger mx-1">Red</button>
        <button type="button" onClick={Yellow} className="btn btn-warning mx-1">Yellow</button>

        </span>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
         </form>*/}
      </div>
    </div>
  </nav>
  );
}
Navbar.propTypes={title:PropTypes.string.isRequired,
abouttext:PropTypes.string.isRequired}