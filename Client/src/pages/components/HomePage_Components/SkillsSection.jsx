import React from 'react';
import '../../css/homePage.css';
import SvgHabi from './SvgHabi';
const SkillsSection = () => {
    return (
        <div className="w3-container w3-light-grey w3-padding-64">
          

          <div style={{display: "flex", alignItems: 'center', flexDirection:"column"}}>
              <h3 className="w3-center">Habilidades</h3>
              <SvgHabi />
              <div className="w3-col m6" style={{marginTop:'50px'}}>
              <p className="w3-wide"><i className="fa fa-camera w3-margin-right" />Photography</p>
              <div className="w3-grey">
                <div className="w3-container w3-dark-grey w3-center" style={{width: '90%'}}>90%</div>
              </div>
              <p className="w3-wide"><i className="fa fa-desktop w3-margin-right" />Web Design</p>
              <div className="w3-grey">
                <div className="w3-container w3-dark-grey w3-center" style={{width: '85%'}}>85%</div>
              </div>
              <p className="w3-wide"><i className="fa fa-photo w3-margin-right" />Photoshop</p>
              <div className="w3-grey">
                <div className="w3-container w3-dark-grey w3-center" style={{width: '75%'}}>75%</div>
              </div>
            </div>
              
          </div>


        </div>
    )
}

export default SkillsSection
