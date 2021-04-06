import React from 'react'
import '../../css/homePage.css';
import { Link } from 'react-scroll';


const Sidebar = () => {

    var mySidebar = document.getElementById("mySidebar");

    function w3_open() {
      if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
      } else {
        mySidebar.style.display = 'block';
      }
    }
        // Close the sidebar with the close button
        function w3_close() {
            mySidebar.style.display = "none";
        }

    return (
    <>

        <div className="w3-top" style={{position:'fixed'}}>
          <div className="w3-bar w3-white w3-card" id="myNavbar" >
          
          <a href="#home" className="w3-bar-item w3-button w3-wide"><img src="https://img.icons8.com/nolan/32/pirates-of-the-caribbean.png"/> NEVERLAND</a>
  
            <div className="w3-right w3-hide-small">
              <Link to="about" smooth={true} duration={1000} className="w3-bar-item w3-button" >SERVICIOS</Link>
              
              <Link to="team" smooth={true} duration={1000} className="w3-bar-item w3-button" ><i className="fa fa-user" /> EQUIPO</Link>
              
              <Link to="work" smooth={true} duration={1000} className="w3-bar-item w3-button" ><i className="fa fa-th" /> ÉXITOS</Link>
              <Link to="contact" smooth={true} duration={1000} className="w3-bar-item w3-button" ><i className="fa fa-envelope" /> CONTACTO</Link>
              <div className="w3-dropdown-hover w3-hide-small"style={{marginRight: '20px'}} >
                <button className="w3-button" title="Notifications" ><i className="far fa-user-circle" /> CUENTA <i className="fa fa-caret-down"></i></button>
                  <div className="w3-dropdown-content w3-card w3-bar-block">
                    <a href="UserMenu" className="w3-bar-item w3-button mr-10" onClick={(e) => window.location.href='./UserMenu'}> Menu</a>
                    <a href="/Settings" className="w3-bar-item w3-button">Settings</a>
                    <a href="http://localhost:3000/" className="w3-bar-item w3-button">Salir</a>
                  </div>
              </div>
            </div>
            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={(e) => {w3_open()}}>
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>
        <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display: 'none'}} id="mySidebar">
          <a href="javascript:void(0)" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
          <a href="#about" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button">ABOUT</a>
          <a href="#team" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button">TEAM</a>
          <a href="#work" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button">WORK</a>
          <a href="#pricing" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button">PRICING</a>
          <a href="#contact" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button">CONTACT</a>
          <a href="./UserMenu" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button">USER MENU</a>
        </nav>
    </>
    )
}

export default Sidebar
