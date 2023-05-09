// react based component. type: rfc
import React from 'react';
//ipfp
import PropTypes from 'prop-types';
// import link from react router dom
import {Link} from 'react-router-dom';
  
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          
            {/* tutorial 2 asolution */}
          <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')} style={{height: '30px', width: '30px', cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>props.toggleMode('danger')} style={{height: '30px', width: '30px', cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')} style={{height: '30px', width: '30px', cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>props.toggleMode('warning')} style={{height: '30px', width: '30px', cursor:'pointer'}}></div>
          </div>


          
        </div>
          {/* switch */}
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>   removed cause of color pallet*/}
          <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light'?'dark':'light'} Mode</label>
        </div>

      </div>
    </div>
  </nav>
  )
}


// to make sure that ist only string and not a number.

Navbar.propTypes =  {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// default propt

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
}