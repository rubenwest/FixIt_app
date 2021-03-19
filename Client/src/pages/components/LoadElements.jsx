import React from 'react';
import {useState} from 'react';
import '../css/maps.css';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'; 
import { Select } from 'antd';

export default function LoadElements({elements, typeIncidents})    {

    const { Option } = Select;
    const [address, setAddress] = useState("");
    let [ruben, setRuben] = useState([]);
    let filtrado=[]; 
    
    /* ruben = Object.values(typeIncidents); */

    const HandleSelectElement = async value => {

        localStorage.setItem("element",value);
        filtrado = Object.values(typeIncidents).filter(element => element.element == value);
        setRuben(filtrado);       
      };

    const handleSelectTypes = async value => {

      localStorage.setItem("typeElement",value);
    };
    

    if (elements.length > 0) {
        return (
            
        <>
        <div className="ui form">
            <div className="field">
                <Select
                showSearch
                style={{ width: '100%' }}
                value={address}
                placeholder="Elige (Farola, Papelera ...)" 
                onSelect={HandleSelectElement} 
                onChange={setAddress}
                
                >
                        {
                        elements.map(({element,_id}) => {
        
                            return(

                                    <Option key={element} value={_id}>{element}</Option>

                            
                            )
                        })
        
                    }
                </Select>
            </div>
        </div>
            
        <div className="ui form">
            <div className="field">
                <label className="label2 select" >Tipo de Incidencia</label>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Elige (Apagada, caida ...)"
                    onSelect={handleSelectTypes}
                    
                                
                >
                            {
                            ruben.map(({incidentType,_id}) => { 
            
                                return(
        
                                        <Option key={_id} value={_id}>{incidentType}</Option>
                                
                                )
                            })
            
                        }
                </Select>
            </div>
        </div>
        </>  
                 
        )
    }
    else{
        return null 
        console.log("loading");
    }
    
}
