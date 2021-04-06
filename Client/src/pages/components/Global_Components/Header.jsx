import React from 'react';


const Header = () => {
    return (
        
        <>
        
        <div className="bgimg-1 w3-display-container w3-grayscale-min" id="home">

            
          <div className="w3-display-left w3-text-white" style={{padding: '48px'}}>
            <span className="w3-jumbo w3-hide-small">Imagina-Una-Compañia</span><br />
            <span className="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br />
            <span className="w3-large">Do whatever you want when you want to.</span>
            <p><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">“You know that place between sleep and awake? That’s where I’ll be waiting.”</a></p>
          </div> 
          <div className="w3-display-bottomleft w3-text-grey w3-large" style={{padding: '24px 48px'}}>
            <i className="fa fa-facebook-official w3-hover-opacity mr-10" />
            <i className="fa fa-instagram w3-hover-opacity mr-10" />
            <i className="fa fa-snapchat w3-hover-opacity mr-10" />
            <i className="fa fa-pinterest-p w3-hover-opacity mr-10" />
            <i className="fa fa-twitter w3-hover-opacity mr-10" />
            <i className="fa fa-linkedin w3-hover-opacity mr-10" />
          </div>
        </div>
        </>
    )
}

export default Header
