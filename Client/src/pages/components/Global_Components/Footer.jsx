import React from 'react';

const Footer = () => {
    return (
        <>
        {/* Footer */}
        
        <footer className="w3-center w3-black w3-padding-64">
          
          <div className="w3-xlarge w3-section">
            <i className="fa fa-facebook-official w3-hover-opacity mr-10" />
            <i className="fa fa-instagram w3-hover-opacity mr-10" />
            <i className="fa fa-snapchat w3-hover-opacity mr-10" />
            <i className="fa fa-pinterest-p w3-hover-opacity mr-10" />
            <i className="fa fa-twitter w3-hover-opacity mr-10" />
            <i className="fa fa-linkedin w3-hover-opacity mr-10" />
          </div>
          <p>Powered by <a href="HomePage" title="Neverland" target="_blank" className="w3-hover-text-green">NeverLand <img src="https://img.icons8.com/nolan/16/pirates-of-the-caribbean.png"/></a></p>
        </footer>
        </>
    )
}

export default Footer
