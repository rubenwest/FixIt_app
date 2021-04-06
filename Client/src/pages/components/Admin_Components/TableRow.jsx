import React from 'react'
import { Table } from 'semantic-ui-react'
import {finishedIncident, format} from '../../services/index';
import SvgProgress from './Svg/SvgProgress';
import SvgFinish from './Svg/SvgFinish';
import Swal from 'sweetalert2';

export const TableRow = ({incidents, setIncidents, filters,countIncidents,setCountIncidents}) => {

    let back = 'lightcoral';
    let show = '';
    
    if (filters!='') {
        var show_incidents = incidents.filter( (incidednt) => incidednt.state == filters );
    }else{
        var show_incidents = incidents;
    }

 

async function finishIncident(e) {

    const resFinishIncident = await finishedIncident(e.target.value)

    if (resFinishIncident.status===201) {
        Swal.fire({
            icon: 'success',
            title: '',
            text: 'Incidencia solucionada!!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCountIncidents(countIncidents-1)
                window.location.href='./AdminMenu';
            }
          })
    }
    
    
    };
    
    return (


        show_incidents.map(({_id, email, element, date, description, incidentType, state,imgUrl, address}) => {
            if (state === 'Solucionada') {
                 back = 'btn-grad-2';
                show = 'hidden';
                 
            }else{
                 back = 'btn-grad-2';
                 show = 'visible'
            }
            return (
                <Table.Row className={back} style={{verticalAlign:"middle"}}>
                    <Table.Cell >{email}</Table.Cell>
                    <Table.Cell>{element}</Table.Cell>
                    <Table.Cell>{incidentType}</Table.Cell>
                    <Table.Cell>{address}</Table.Cell>
                    <Table.Cell>{format(date)}</Table.Cell>
                     {
                         state=='Solucionada' && (<Table.Cell style={{textAlign: 'center'}}><SvgFinish /></Table.Cell>)
                     }
                     {
                         state=='En proceso' && (<Table.Cell style={{textAlign: 'center'}}><SvgProgress /></Table.Cell>)
                     }
                    <Table.Cell style={{textAlign: 'center'}}><button id='action' style={{visibility: show }} className="ui inverted green button" onClick={finishIncident} value={_id}>Solucionar</button></Table.Cell>
                </Table.Row>
            )
        }

        
        )
    )
}

