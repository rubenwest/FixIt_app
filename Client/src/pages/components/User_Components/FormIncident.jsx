import React from 'react'
import LoadElements from './LoadElements';
import Maps from './Maps';
import {useState, useRef} from 'react';
import jwt_decode from "jwt-decode";
import '../../css/register.css';
import 'semantic-ui-css/semantic.min.css'; 
import 'antd/dist/antd.css';

const FormIncident = ({handleSubmit}) => {

    const token = localStorage.getItem("token");
    const userLoged = jwt_decode(token); 

    const [detailsIncidents, setDetailsIncidents] = useState({
                                                        email: userLoged.user.email, 
                                                        description:"", 
                                                        element: "", 
                                                        incidentType: "",
                                                        address: ""
                                                    });

    const inputFileRef = useRef();

    const _handleSubmit = (e) => {

        e.preventDefault();

        handleSubmit({...detailsIncidents, image: inputFileRef.current.files[0]});

        }

    return (
        <form onSubmit={_handleSubmit}>
        <div className="card card-4">
            <div className="card-body">
                <h1 className="title2">Nuevo Aviso</h1>
                
                    <div className="ui form">
                        <div className="field">
                            <label className="label2" >Tipo de Elemento</label>
                            <LoadElements detailsIncidents={detailsIncidents} setDetailsIncidents={setDetailsIncidents} />

                            
                        </div>
                    </div>

                    <div className="ui form">
                        <div className="field">
                            <label className="label2">Localizacion</label>
                            <Maps detailsIncidents={detailsIncidents} setDetailsIncidents={setDetailsIncidents} />
                        </div>
                    </div>
                    <div className="ui form">
                        <div className="field">
                            <label className="label2">Descripcion</label>
                            <textarea rows="2" name="description" onChange={e => setDetailsIncidents({...detailsIncidents, description: e.target.value})} value={detailsIncidents.description}></textarea>
                        </div>
                    </div>
                    <div className="ui form">
                        <div className="field">
                            <label className="label2" >Adjuntar imagen</label>
                            <div className="carrusel">
                            <input type="file" ref={inputFileRef} accept="image/*"/>
                            </div>
                        </div>
                    </div>
                    <div className="p-t-15">
                        <button className="btn btn--radius-2 btn--blue" type="submit">Crear Incidencia</button>
                    </div>
            </div>
         </div>
        </form>
    )
}

export default FormIncident
