import React from 'react';

const VerticalOptions = () => {
    return (
        <>    

        <aside className="menu">

            <p className="menu-label">
                Administracion
            </p>
            <ul className="menu-list">
                <li>
                <a className="is-active">Datos Usuario</a>

                </li>
            </ul>
            <p className="menu-label">
                Enlaces
            </p>
            <ul className="menu-list">
                <li><a href='HomePage'>Compañia</a></li>
                <li><a>Ciudades</a></li>
                <li><a>Otros</a></li>
            </ul>
        </aside>

        
    </>
    )
}

export default VerticalOptions
