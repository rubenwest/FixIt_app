import React from 'react';
import '../../css/homePage.css';
const AboutSection = () => {
    return (
        
        <div className="w3-container html" style={{padding: '128px 16px'}} id="about">
          <h3 className="w3-center">Sobre Nosotros</h3>
          <p className="w3-center w3-large">Características de nuestra empresa</p>
          <div className="w3-row-padding w3-center" style={{marginTop: '64px'}}>
            <div className="w3-quarter">
              <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" />
              <p className="w3-large">Responsive</p>
              <p>Creamos aplicaciones Web Responsive capacces de adaptarse a cualquier dispositivo donde se visualice. Si tu sitio web está obsoleta, es el momento de ponerte en manos de nuestro equipo para diseñar una web responsive con las mejores garantías</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
              <p className="w3-large">Pasión</p>
              <p>La pasión se encuentra donde confluyen las cosas que te gusta hacer y las cosas que se te dan bien. Nosotros unimos ambas cosas</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-diamond w3-margin-bottom w3-jumbo" />
              <p className="w3-large">Diseño</p>
              <p>Solucionamos tus problemas de la formas mas artistica y creativa que puedas imaginar</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-cog w3-margin-bottom w3-jumbo" />
              <p className="w3-large">Soporte</p>
              <p>Nos encargamos de ayudarte en todo lo que necesites</p>
            </div>
          </div>
        </div>
    )
}

export default AboutSection
