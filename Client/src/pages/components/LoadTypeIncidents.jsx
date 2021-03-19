import React from 'react';
import '../css/maps.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';

export default function LoadTypeIncidents({typeIncidents}) {

    const { Option } = Select;
    console.log("Cargamos los tipos de incidencias: ",typeIncidents);

    if (typeIncidents.length > 0) {
        return (

        <>
            <Select
               showSearch
               style={{ width: '100%' }}
               placeholder="Elige (Farola, Papelera ...)"            
            >
                    {
                    typeIncidents.map(({typeIncident}) => {
    
                        return(

                                <Option key={typeIncident} value={typeIncident}>{typeIncident}</Option>

                        
                        )
                    })
    
                }
            </Select>
                    
                
        </>  
                 
        )
    }
    else{
        return null 
        console.log("loading");
    }
    
}
