import React, { useEffect, useState } from 'react';
import '../../css/userMenu.css';
import {searchUser, format } from '../../services/index';

import Swal from 'sweetalert2';
import working from '../../img/working.jpg';
import SvgXmarc from './SvgXmarc';
import SvgCheck from './SvgCheck';



function ListIncidents({incidents, setIncidents,filters,countIncidents,setCountIncidents}) {
    
    
    const [name, setName] = useState('');

    if (filters!='') {
 
        var show_incidents = incidents.filter( (incident) => incident.state == filters );

        console.log(show_incidents); 
    }else{
        var show_incidents = incidents;
    }


    async function loadUserData(details) {

        const responSearch = await searchUser(details);
    
        if (!responSearch.data.ok) {
            console.log('ladata:',responSearch.data);
            setName(`${responSearch.data.userDB.name} ${responSearch.data.userDB.surname}`);
        }else{
    
            console.log('Algo ha ido mal');
            
        }
        
    }

    useEffect(() => {

        loadUserData(incidents[0]);

    }, [])

    function quitIncident(id,email,address) {

          Swal.fire({
            title: 'Estamos trabajando en ello',
            text: 'Quieres solucionar la incidencia?',
            imageUrl: working,
            imageWidth: 400,
            imageHeight: 200,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ya está solucionado!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Notificado!',
                'En breve el encargado de la gestion verificará el estado de la misma',
                'success',
                notify()
              )
            }
          })
        
          function notify() {

            console.log('vamos a guardar: ',id,email,address);
             

          }
    }
 

    return (

            <>
                    {
                        show_incidents.map(({_id, email, element, date, description, incidentType, state,imgUrl, address}) => {
                            /* {state == 'Solucionada' ? 'darkRuben' : 'ruben'} */
                            return (

                                        <div className='cardIncident'>
                                            <div className='imgBx' style={{backgroundImage: `url(${imgUrl})`}}>
                                            </div>
                                            <div className='contentIncident'>
                                                <h2>{element}</h2>
                                                <h2>{incidentType}</h2>
                                                <p>{description}</p>
                                                <p>{address}</p>
                                                <p>{format(date)}</p>
                                                {
                                              state =='En proceso' ?  <div id='xMarc' onClick={() => {quitIncident(_id,email,address)}} >
                                              <SvgXmarc />
                                          </div> : <div className= 'darkRuben' >
                                                <SvgCheck />
                                            </div>
                                            }
                                            </div>

                                        </div>


                                )

                            })

                    }
                 
        </>
     
    )
    
}  

export default ListIncidents


