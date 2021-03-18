import React from 'react';
import {useEffect, useState} from 'react';
import './css/register.css';
import jwt_decode from "jwt-decode";
import LoadStreets from './components/LoadStreets';

function IncidentRegister() {

    const token = localStorage.getItem("token");
    const rur = jwt_decode(token); 
    const id = rur.user._id;
    console.log("llegamos a IncidentResgister con ",id);

    const [{data}, dispatch] = useState({
        data: ""
    }); 

    PreLoadStreets(data,dispatch);

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
                                            <select multiple="" className="ui dropdown">
                                            </select>
                                        </div>
                                    </div>
                                    <div className="ui form">
                                        <div className="field">
                                            <label className="label2">Tipo de Incidencia</label>
                                            <select multiple="" className="ui dropdown">
                                            </select>
                                        </div>
                                    </div>
 
                                    <div className="ui form">
                                        <div className="field">
                                            <label className="label2">Localización</label>
                                            <LoadStreets data={data}/>
                                        </div>
                                    </div>

                                     
                                    <div className="ui form">
                                        <div className="field">
                                            <label>Descripcion</label>
                                            <textarea rows="2"></textarea>
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

function PreLoadStreets(data,dispatch) {

    console.log("Cargamos las calles");   
    useEffect(() => {

        fetch('http://localhost:3000/Street')
        .then(response =>  response.json())
        .then(data => { 
            console.log("Las calles: ",data); 
                dispatch({data}) 
                console.log(data);
            })
        .catch((error) => {
            dispatch({data: null })
            console.log("Error en el fetch",error);
        })
    }, []);
}

export default IncidentRegister
