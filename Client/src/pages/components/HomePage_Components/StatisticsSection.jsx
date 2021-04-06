import React from 'react'
import '../../css/homePage.css';
const StatisticsSection = () => {
    return (
        <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
          <div className="w3-quarter">
            <span className="w3-xxlarge">14+</span>
            <br />Partners
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">55+</span>
            <br />Projectos hechos
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">89+</span>
            <br />Clientes Felices
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">150+</span>
            <br />Meetings
          </div>
        </div>
    )
}

export default StatisticsSection
