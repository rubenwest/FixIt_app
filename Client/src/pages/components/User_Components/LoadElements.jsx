import React from 'react';
import {useEffect, useState} from 'react';
import {getTypeIncidents,getElements} from '../../services/index';
import '../../css/maps.css';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'; 
import { Select } from 'antd';

export default function LoadElements({detailsIncidents,setDetailsIncidents})  {

    const [elements, setElements] = useState([]); 
    const [typeIncidents, setTypeIncidents] = useState([]); 
    const { Option } = Select;
    const [address, setAddress] = useState("");
    let [filterTypes, setfilterTypes] = useState([]);
    let filtrado=[];
    
    async function loadElements() {

        const resElements =  await getElements();
        const resTypesIncidents =  await getTypeIncidents();

        if (resElements.status === 200) {
            setElements(resElements.data)  
        }
        if (resTypesIncidents.status === 200) {
            setTypeIncidents(resTypesIncidents.data)  
        }
        
    }

    useEffect( ()=>{
        loadElements();
    },[])

   
    const HandleSelectElement = async (value,element) => {
    
    
        setDetailsIncidents({...detailsIncidents, element: element.children});
        
        filtrado = Object.values(typeIncidents).filter(element => element.element == value);
        setfilterTypes(filtrado);  
       

    
      };

    const handleSelectTypes = (incidentType,value) => {
      

      /* localStorage.setItem("typeElement",value.children); */
      const localStorage_typeElement= localStorage.getItem("typeElement");
      /* console.log("localStorage_typeElement: ",localStorage_typeElement); */
      setDetailsIncidents({...detailsIncidents, incidentType: value.children});
      /* console.log("incidentType : ",detailsIncidents); */
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
                                    <Option key={_id} value={_id} >{element}</Option>
                            )
                        })
        
                    }
                </Select>
            </div>
        </div>
            
        <div className="ui form">
            <div className="field">
                <label className="label2" >Tipo de Incidencia</label>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Elige (Apagada, caida ...)"
                    onSelect={handleSelectTypes}
                    
                                
                    >
                            {
                            filterTypes.map(({incidentType,_id}) => { 
            
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
