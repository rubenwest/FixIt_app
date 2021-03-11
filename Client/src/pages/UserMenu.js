import './css/userMenu.css';
import jwt_decode from "jwt-decode";
import { Container, Card, Icon, Image, Button, Dropdown, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; 

function LoadIncidents(id) {
    console.log("LoadIncidents");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(id)
    };

    fetch('http://localhost:3000/Incidents', requestOptions)

    .then(response => {
      
      return response.json();
      
    })
    .then(response=>{
        return response.json();
    })
    .catch((error) => {
        console.log(error);
      });
    
}

function UserMenu() {
    
    const token = localStorage.getItem("token");
    const rur = jwt_decode(token); 
    const id = rur.user.id;

    //cargamos todas las incidencias asignadas a esta persona

    LoadIncidents(id);

    console.log(rur.user.email,id);
 
        return (

        <div className="page-wrapper bg-gra-02 p-t-30 "> 
            <Container>
                <div className="ui menu m-10">
                    <a className="item">Home</a>
                    <a className="item">About Us</a>
                    <a className="item">Upcoming Events</a>
                    
                </div>
                <div className="ui card row d-flex p-b-100 p-t-100">
                    <div className="content p-t-100 ">
                        <h1>Nueva Incidencia</h1>
                        <h1><i className="plus square icon "></i></h1>
                        <span></span>
                    </div>
                </div>
            </Container>
        </div> 
    )
};
    

export default UserMenu;