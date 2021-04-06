import React from 'react'
import phone_buildings from "../../img/phone_buildings.jpg";
import '../../css/homePage.css';
import { Link } from 'react-scroll';
const PromoSection = () => {
    return (
        <div className="w3-container w3-light-grey" style={{padding: '128px 16px'}}>
          <div className="w3-row-padding">
            <div className="w3-col m6">
              <h3>Sabemos diseñar</h3>
              <p>Creamos contenido sacado directamente de la imaginación para que la experiencia sea lo más mágica posible</p>
              <p>
                  <Link to="work" smooth={true} duration={1000} className="w3-button w3-black" ><i className="fa fa-th">&nbsp;</i> Nuestrs Exitos</Link>
              </p>
            </div>
            <div className="w3-col m6">
              <img className="w3-image w3-round-large" src={phone_buildings} alt="Buildings" width={700} height={394} />
            </div>
          </div>
        </div>
    )
}

export default PromoSection
