import React from 'react';
import '../css/userMenu.css';
import logo from '../img/logo2.png'

function LoadIncidents({data}) {
    
    console.log("llegamos a LoadIncidents con ",data);
    if (!data) {
        return <p>Loading...</p>
    }

    return (
    <>

        {
            data.map(({user, category, date, description, priority, state}) => {

                return(
                    <div id= "laprueba">
                        <div className="ui card d-flex p-b-100 p-t-100 row-space">
                        <div className="image">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="header">Usuario: {user}</div>
                        <div className="meta">
                                <p class="date">Categoria: {category}</p>
                                <p class="date">Fecha: {date}</p>
                        </div>
                        <div className="content p-t-100 ">
                            <p>Descripcion: {description}</p>
                            <span>Estado: {state}</span>
                        </div>
                        </div>
                    </div>
                        

                    
                )
            })

        }
     </>   
    )
    
}  

export default LoadIncidents


