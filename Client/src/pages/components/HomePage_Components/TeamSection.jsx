import React from 'react';
import  team1  from '../../img/team1.jpg';
import  teamruben  from "../../img/homePage/teamruben.jpg";
import  teampaloma  from "../../img/homePage/teampaloma.jpg";
import  teamangeles  from "../../img/homePage/teamangeles.jpg";
import  teamanabel  from "../../img/homePage/teamanabel.jpg";
import  teammanu  from "../../img/homePage/teammanu.jpg";
import  teamcarmen  from "../../img/homePage/teamcarmen.jpg";
import  teamjorge  from "../../img/homePage/teamjorge.jpg";
import  teamjuanjo  from "../../img/homePage/teamjuanjo.jpg";

import '../../css/homePage.css';

const TeamSection = () => {
    return (
        <div className="w3-container" style={{padding: '128px 16px'}} id="team">
          <div style={{display: "flex", alignItems: 'center', flexDirection:"column"}}>
              <h2 className="w3-center">THE PIRATE BAY</h2>
              <img src="https://img.icons8.com/nolan/128/pirates-of-the-caribbean.png"  />
              <span><p> </p></span>
              <p className="w3-center w3-large">Los que dirigen este grupo </p>
          </div>
          <div className="w3-row-padding " style={{marginTop: '64px'}}>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={teamruben} alt="John" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Ruben Sanchez</h3>
                  <p className="w3-opacity">CEO &amp; Founder</p>
                  <p>Peter Pan de la vida, entusiasta e incansable. Adicto a la tecnolgía, conseguirá todo lo que se proponga.</p>
                  <p><button className="w3-button w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={teammanu} alt="Dan" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Pedro Bretones</h3>
                  <p className="w3-opacity">Designer</p>
                  <p>Soñador y seguro, Cordobés de nacimiento y puro arte para diseñar tanto proyectos como equipos.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={teamjorge} alt="John" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Angela Candela</h3>
                  <p className="w3-opacity">CEO &amp; Founder</p>
                  <p>Paciente y sensible, pura personalidad italiana llena de energia que ama todo lo que hace.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={teamcarmen} alt="John" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Pablo L. Leth</h3>
                  <p className="w3-opacity">Recruiter</p>
                  <p>Mirada sencilla y sonrisa tranquila, maneja las situaciones complejas con profesionalidad y templanza.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={teamjuanjo} alt="Jane" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Irina Lebedeva</h3>
                  <p className="w3-opacity">Art Director</p>
                  <p>Intrépida y siempre sonriente tiene una mente privilegiada para todo lo que hace.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={teampaloma} alt="Dan" style={{width: '100%' }} />
                <div className="w3-container">
                  <h3>Borja Tortosa</h3>
                  <p className="w3-opacity">CEO &amp; Founder</p>
                  <p>Aventurero y trotamundos, sabe como sacar partido a cada situación y persona del equipo</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={teamanabel} alt="Jane" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Jose calvo</h3>
                  <p className="w3-opacity">Art Director</p>
                  <p>Amable y directo, sabe como llevar al equipo a su máximo rendimiento.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={teamangeles} alt="Mike" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Jesus Heras</h3>
                  <p className="w3-opacity">Web Designer</p>
                  <p>Bromista al mas puro estilo Angel Martin, derrocha energia para sacar a adelante cualquier cosa.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default TeamSection
