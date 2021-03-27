import React from 'react';
import {saveIncident} from './Users/services/index'
import './css/register.css';
import 'semantic-ui-css/semantic.min.css'; 
import 'antd/dist/antd.css';
import { Alert } from 'antd';
import FormIncident from './components/FormIncident';


function IncidentRegister() {

    const handleSubmit = async (detailsIncidents) => {

        console.log("QUE MIERDA ESTOY GUARDANDO");
        console.log(detailsIncidents);

/*         const resSaveIncident = await saveIncident(detailsIncidents);
        console.log("resSaveIncident: ",resSaveIncident);
        
        if (resSaveIncident.status === 201) {
            window.location.href='./UserMenu';
        } */
    }
        
    return (

            <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w680">
                        <FormIncident handleSubmit= {handleSubmit}/>
                    </div>
                </div>
            
    )
}

export default IncidentRegister
