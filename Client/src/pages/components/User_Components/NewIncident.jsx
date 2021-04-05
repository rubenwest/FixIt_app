import React from 'react'
import 'semantic-ui-css/semantic.min.css'; 
import '../../css/userMenu.css';


const NewIncident = () => {
    return (
        <div className="ruben2">
            <div className="fatherDiv">
                <div className="sonDiv">
                <h3>Añadir</h3>                    
                </div>
                <div className="sonDiv">
                <h3>Incidencia</h3>
                </div>
                <div className="sonDiv">
                    <h1>
                        <i className="plus square icon " onClick={() => window.location.href='./IncidentRegister'} />
                        
                    </h1>
                </div>
            </div>
        </div>
                        

        
    )
}

export default NewIncident
