import React from 'react';
import {useEffect, useState} from 'react';
import './css/register.css';
import jwt_decode from "jwt-decode";
import LoadElements from './components/LoadElements';
import 'semantic-ui-css/semantic.min.css'; 
import Maps from './components/Maps';
import 'antd/dist/antd.css';
import { Select } from 'antd';

function IncidentRegister() {

    const { Option } = Select;
    const token = localStorage.getItem("token");
    const rur = jwt_decode(token); 
    const id = rur.user._id;
    console.log("llegamos a IncidentResgister con ",id);
    const coordinates = localStorage.getItem("coordinates");
    console.log("Ahora tambien tengo las coordenadas ",coordinates);

    const [{elements}, dispatch] = useState({
        elements: ""
    }); 
    const [{typeIncidents}, dispatchTypes] = useState({
        typeIncidents: ""
        }); 
    

    PreLoadElements(elements,dispatch);
    PreLoadTypeIncidents(typeIncidents,dispatchTypes);
    
    return (


        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w680">
                        <div className="card card-4">

                            <div className="card-body">
                                <h1 className="title2">Nuevo Aviso</h1>
                                <form method="post">
                                <div className="ui form">
                                        <div className="field">
                                            <label className="label2" >Tipo de Elemento</label>
                                            <LoadElements elements={elements} typeIncidents={typeIncidents} />
                                        </div>
                                    </div>
 
                                    <div className="ui form">
                                        <div className="field">
                                            <label className="label2 select">Localización</label>
                                            <Maps />
                                        </div>
                                    </div>
                                    <div className="ui form">
                                        <div className="field select">
                                            <label select>Descripcion</label>
                                            <textarea rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div className="ui form">
                                        <div className="field">
                                            <label className="label2" >Adjuntar imagenes</label>
                                            <div className="carrusel"></div>
                                        </div>
                                    </div>
                                    <div className="p-t-15">
                                        <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

function PreLoadElements(elements,dispatch) {

    console.log("PreLoadElements");   
    useEffect(() => {

        fetch('http://localhost:3000/Element')
        .then(response =>  response.json())
        .then(elements => { 
            
                dispatch({elements}) 
                console.log(elements);
            })
        .catch((error) => {
            dispatch({elements: null })
            console.log("Error en el fetch",error);
        })
    }, []);
}

function PreLoadTypeIncidents(typeIncidents,dispatchTypes) {

    console.log("PreLoadTypeIncidents");
    useEffect(() => {
        
        fetch('http://localhost:3000/LoadIncidentsTypes')
        .then(response =>  response.json())
        .then(typeIncidents => { 
            
            dispatchTypes({typeIncidents}) 
                console.log(typeIncidents);
            })
        .catch((error) => {
            dispatchTypes({typeIncidents: null })
            console.log("Error en el fetch",error);
        })
    }, []);
    
}



export default IncidentRegister
