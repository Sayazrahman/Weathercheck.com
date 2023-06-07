import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/home" style={{fontFamily: 'fantasy',backgroundColor:'red',borderRadius: '10px'}}>Weather Check</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"  style={{fontFamily: 'fantasy'}}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/home">Top Areas</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More On weatherCheck
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/home">About Us</a></li>
              <li><a className="dropdown-item" href="/home">Contact Us</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/home">Feedback</a></li>
            </ul>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  )
}
