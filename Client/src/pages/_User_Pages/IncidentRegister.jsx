import React from 'react';
import {saveIncident} from '../services/index'
import FormIncident from '../components/User_Components/FormIncident';
import SidebarUser from '../components/User_Components/SidebarUser';
import Footer from '../components/Global_Components/Footer';
import Swal from 'sweetalert2';
function IncidentRegister() {

    const handleSubmit = async (detailsIncidents) => {

        const resSaveIncident = await saveIncident(detailsIncidents);
        
        if (resSaveIncident.status === 201) {

            Swal.fire({
                icon: 'success',
                title: '',
                text: 'Incidencia creada!'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href='./UserMenu';
                }
              })
            
        }
    }
        
    return (
            <>
            <div>
                    <SidebarUser />
            </div>                    

            <div className="bg-gra-menu vh-100 d-flex-normal">
            
                    <div className="wrapper-incidentRegister wrapper-padding-50"> 
                        <FormIncident handleSubmit= {handleSubmit}/>
                    </div>
            </div>
            <Footer />
            </>          
    )
}

export default IncidentRegister
