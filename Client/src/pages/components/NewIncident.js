import React from 'react'
import 'semantic-ui-css/semantic.min.css'; 
import '../css/userMenu.css';
import img from "../img/Add.png";
import { Container,Card, Icon, Image  } from 'semantic-ui-react';

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
                    <h1><i className="plus square icon " onClick={() => window.location.href='./IncidentRegister'}></i></h1>
                </div>
            </div>
        </div>
                        
                            
                        

/*         <Container>
            <div id= "sonDiv">
                <div className="ui card d-flex">
                    <div className="image">
                        <img src="" alt=""/>
                    </div>
                    <div className="content p-t-100 ">
                        
                    </div>
                </div>
            </div>
        </Container> */
        
    )
}

export default NewIncident
