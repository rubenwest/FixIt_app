import React from 'react';
import {useEffect, useState} from 'react';
import './css/register.css';
import jwt_decode from "jwt-decode";
import LoadElements from './components/LoadElements';
import Maps from './components/Maps';

function IncidentRegister() {

    const token = localStorage.getItem("token");
    const rur = jwt_decode(token); 
    const id = rur.user._id;
    console.log("llegamos a IncidentResgister con ",id);
    const coordinates = localStorage.getItem("coordinates");
    console.log("Ahora tambien tengo las coordenadas ",coordinates);

    const [{elements}, dispatch] = useState({
        elements: ""
    }); 

    PreLoadElements(elements,dispatch);

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
                                            <LoadElements elements={elements}/>
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
                                            

                                            <Maps />
                                            
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

function PreLoadElements(elements,dispatch) {

    console.log("Cargamos las calles");   
    useEffect(() => {

        fetch('http://localhost:3000/Element')
        .then(response =>  response.json())
        .then(elements => { 
            console.log("Los elementos: ",elements); 
                dispatch({elements}) 
                console.log(elements);
            })
        .catch((error) => {
            dispatch({elements: null })
            console.log("Error en el fetch",error);
        })
    }, []);
}

export default IncidentRegister
