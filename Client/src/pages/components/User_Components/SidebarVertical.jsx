import React from 'react';
import 'semantic-ui-css/semantic.min.css'; 
import '../../css/userMenu.css';

const SidebarVertical = () => {
    return (
        <>    

            <aside class="menu pt-50  m-r-45">
            <p class="menu-label ">
                
            </p>
            <ul class="menu-list">
                <li><a></a></li>
                <li><a></a></li>
            </ul>
            <p class="menu-label">
                Administration
            </p>
            <ul class="menu-list">
                <li>
                <a class="is-active">Incidencias Activas</a>
                <ul>
                    <li><a>En proceso</a></li>
                    <li><a>Solventadas</a></li>
                </ul>
                </li>
            </ul>
            <p class="menu-label">
                Enlaces
            </p>
            <ul class="menu-list">
                <li><a>Compañia</a></li>
                <li><a>Ciudades</a></li>
                <li><a>Others</a></li>
            </ul>
            </aside>
   
            
        </>

    )
}

export default SidebarVertical
