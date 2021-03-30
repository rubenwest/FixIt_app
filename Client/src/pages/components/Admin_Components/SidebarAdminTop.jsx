    import React from 'react';
    import logo_side from '../../img/logo_side.png';
    
    
    const SidebarTop = () => {
    
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
            {/* Navbar (sit on top) */}
            <div className="w3-top">
              <div className="w3-bar w3-white w3-card" id="myNavbar">
              
              <a href="UserMenu" className="w3-bar-item w3-button w3-wide"><img src={logo_side}/> FIX-IT</a>
                {/* Right-sided navbar links */}
                <div className="w3-right w3-hide-small">
                  <a href="HomePage" className="w3-bar-item w3-button" onClick={(e) => window.location.href='../HomePage'}>OUR COMPANY</a>
                  <a href="IncidentRegister" className="w3-bar-item w3-button" onClick={() => window.location.href='./IncidentRegister'}><i class="fas fa-feather-alt" /> New Incident</a>
                  <div class="w3-dropdown-hover w3-hide-small"style={{marginRight: '20px'}} >
                    <button class="w3-button" title="Notifications" ><i class="far fa-user-circle" /> ACCOUNT <i class="fa fa-caret-down"></i></button>
                    <div class="w3-dropdown-content w3-card w3-bar-block">
                      <a href="IncidentRegister" class="w3-bar-item w3-button"><i class="fas fa-feather-alt" /> New Incident</a>
                      <a href="Settings" class="w3-bar-item w3-button">Settings</a>
                      <a href="http://localhost:3000/" class="w3-bar-item w3-button">Log Out</a>
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
              <a href="HomePage" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button">OUR COMPANY</a>
              <a href="IncidentRegister" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button">New Incident</a>
              <a href="./UserMenu" onClick={(e) => {w3_open()}} className="w3-bar-item w3-button">Account</a>
            </nav>
        </>
        )
    }
    
export default SidebarTop
    
