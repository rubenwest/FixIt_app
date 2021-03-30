import React from 'react';
import { Link } from 'react-scroll';
const Footer = () => {
    return (
        <>
        {/* Footer */}
        
        <footer className="w3-center w3-black w3-padding-64">
          <Link smooth={true} duration={1000} to="home" className="w3-button w3-light-grey" ><i className="fa fa-arrow-up w3-margin-right" />To the top</Link>
          <div className="w3-xlarge w3-section">
            <i className="fa fa-facebook-official w3-hover-opacity mr-10" />
            <i className="fa fa-instagram w3-hover-opacity mr-10" />
            <i className="fa fa-snapchat w3-hover-opacity mr-10" />
            <i className="fa fa-pinterest-p w3-hover-opacity mr-10" />
            <i className="fa fa-twitter w3-hover-opacity mr-10" />
            <i className="fa fa-linkedin w3-hover-opacity mr-10" />
            
          </div>
          <p>Powered by <a href="" title="Neverland" target="_blank" className="w3-hover-text-green">NeverLand <img src="https://img.icons8.com/nolan/16/pirates-of-the-caribbean.png"/>{/* <i class="fa fa-hat-wizard"></i> */}</a></p>
        </footer>
        </>
    )
}

export default Footer
