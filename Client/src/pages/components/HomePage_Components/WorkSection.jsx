import React from 'react'
import tech_mic from '../../img/tech_mic.jpg';
import tech_phone from '../../img/tech_phone.jpg';
import tech_drone from '../../img/tech_drone.jpg';
import tech_sound from '../../img/tech_sound.jpg';
import tech_tablet from '../../img/tech_tablet.jpg';
import tech_camera from '../../img/tech_camera.jpg';
import tech_typewriter from '../../img/tech_typewriter.jpg';
import tech_tableturner from '../../img/tech_tableturner.jpg';
import '../../css/homePage.css';

const WorkSection = () => {
    return (
        <div className="w3-container" style={{padding: '128px 16px'}} id="work">
          <h1 className="w3-center">Casos de éxito</h1>
          <p className="w3-center w3-large">Lo que hemos hecho por la gente</p>
          <div className="w3-row-padding" style={{marginTop: '64px'}}>
            <div className="w3-col l3 m6">
              <a href="http://localhost:3000" target='_blank'><img src={tech_mic} style={{width: '100%'}} className="w3-hover-opacity" alt="A microphone"/></a>
            </div>
            <div className="w3-col l3 m6">
              <img src={tech_phone} style={{width: '100%'}} className="w3-hover-opacity" alt="A phone" />
            </div>
            <div className="w3-col l3 m6">
              <img src={tech_drone} style={{width: '100%'}} className="w3-hover-opacity" alt="A drone" />
            </div>
            <div className="w3-col l3 m6">
              <img src={tech_sound} style={{width: '100%'}} className="w3-hover-opacity" alt="Soundbox" />
            </div>
          </div>
          <div className="w3-row-padding w3-section">
            <div className="w3-col l3 m6">
              <img src={tech_tablet} style={{width: '100%'}} className="w3-hover-opacity" alt="A tablet" />
            </div>
            <div className="w3-col l3 m6">
              <img src={tech_camera} style={{width: '100%'}} className="w3-hover-opacity" alt="A camera" />
            </div>
            <div className="w3-col l3 m6">
              <img src={tech_typewriter} style={{width: '100%'}} className="w3-hover-opacity" alt="A typewriter" />
            </div>
            <div className="w3-col l3 m6">
              <img src={tech_tableturner} style={{width: '100%'}} className="w3-hover-opacity" alt="A tableturner" />
            </div>
          </div>
        </div>
    )
}

export default WorkSection
