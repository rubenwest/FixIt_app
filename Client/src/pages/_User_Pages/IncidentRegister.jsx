import React from 'react';
import {saveIncident} from '../services/index'
import FormIncident from '../components/User_Components/FormIncident';
import SidebarUser from '../components/User_Components/SidebarUser';

function IncidentRegister() {

    const handleSubmit = async (detailsIncidents) => {

        console.log("QUE MIERDA ESTOY GUARDANDO");
        console.log(detailsIncidents);

        const resSaveIncident = await saveIncident(detailsIncidents);
        console.log("resSaveIncident: ",resSaveIncident);
        
        if (resSaveIncident.status === 201) {
            window.location.href='./UserMenu';
        }
    }
        
    return (

            <div className="bg-gra-menu p-t-130 p-b-100 font-poppins">
                    <SidebarUser />
                    
                    <div className="wrapper wrapper--w680"> 
                        <FormIncident handleSubmit= {handleSubmit}/>
                    </div>
                </div>
            
    )
}

export default IncidentRegister
