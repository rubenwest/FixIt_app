import {useEffect, useState} from 'react';
import './css/userMenu.css';
import jwt_decode from "jwt-decode";
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; 
import LoadIncidents from './components/LoadIncidents';

function PreLoadIncidents(id,data,dispatch) {

    console.log("Le enviamos a LoadIncidents: ",id);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({user: id})
    };
    
    useEffect(() => {

        fetch('http://localhost:3000/LoadIncidents', requestOptions)
        .then(response =>  response.json())
        .then(data => { 
                dispatch({data, error: null, isloading: false }) 
                console.log(data);
            })
        .catch((error) => {
            dispatch({data: null, error: null, isloading: false })
            console.log("Error en el fetch",error);
        })
    }, []);
}

function UserMenu() {
    
    const token = localStorage.getItem("token");
    const rur = jwt_decode(token); 
    const id = rur.user._id;
    console.log(rur);
    console.log(rur.user);

    const [{data, error, isloading}, dispatch] = useState({
        data: null,
        error: null,
        isloading: true
    });
    
    //cargamos todas las incidencias asignadas a esta persona

    PreLoadIncidents(id,data,dispatch);

    console.log(rur.user.email,id);
 
        return (

        <div className="page-wrapper bg-gra-02 p-t-30 "> 
            <Container>
                <div className="ui menu m-10">
                    <a className="item">Home</a>
                    <a className="item">About Us</a>
                    <a className="item">Upcoming Events</a>
                    
                </div>
            </Container>
            <div className="d-flex m-25 row-space container">
                <LoadIncidents data={data}/>
                <div className="ui card d-flex">
                    <div className="content p-t-100 ">
                        <h1>Nueva Incidencia</h1>
                        <h1><i className="plus square icon "></i></h1>
                    </div>
                </div>

            </div>

            <div id= "laprueba">
                <div id="hijoprueba">
                <div className="ui card d-flex">
                    <div className="content p-t-100 ">
                        <h1>Nueva Incidencia</h1>
                        <h1><i className="plus square icon "></i></h1>
                    </div>
                </div>
                </div>
                <div id="hijoprueba">
                <div className="ui card d-flex">
                    <div className="content p-t-100 ">
                        <h1>Nueva Incidencia</h1>
                        <h1><i className="plus square icon "></i></h1>
                    </div>
                </div>
                </div>
                <div id="hijoprueba">
                <div className="ui card d-flex">
                    <div className="content p-t-100 ">
                        <h1>Nueva Incidencia</h1>
                        <h1><i className="plus square icon "></i></h1>
                    </div>
                </div>
                </div>
                <div id="hijoprueba">
                <div className="ui card d-flex">
                    <div className="content p-t-100 ">
                        <h1>Nueva Incidencia</h1>
                        <h1><i className="plus square icon "></i></h1>
                    </div>
                </div>
                </div>
            </div>

        </div> 
    )
};
    

export default UserMenu;