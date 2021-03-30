import React from 'react'
import phone_buildings from "../../img/phone_buildings.jpg";
import '../../css/homePage.css';
const PromoSection = () => {
    return (
        <div className="w3-container w3-light-grey" style={{padding: '128px 16px'}}>
          <div className="w3-row-padding">
            <div className="w3-col m6">
              <h3>We know design.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore.</p>
              <p><a href="#work" className="w3-button w3-black"><i className="fa fa-th">&nbsp;</i> View Our Works</a></p>
            </div>
            <div className="w3-col m6">
              <img className="w3-image w3-round-large" src={phone_buildings} alt="Buildings" width={700} height={394} />
            </div>
          </div>
        </div>
    )
}

export default PromoSection
