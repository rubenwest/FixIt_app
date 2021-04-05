import React from 'react'

const SidebarVertical = ({loadingInc, setILoadingInc, incidents,users,filters,setFilters, countIncidents, countUsers}) => {


function active(e) {

    var inci = document.getElementById('inc');
    var user = document.getElementById('users');
    var iProgress = document.getElementById('En proceso');
    var iDone = document.getElementById('Solucionada');
    var all = document.getElementById('Todas');

    console.log('activamor!', e.target.id);

    switch (e.target.id) {
        case 'inc':
            user.style.backgroundImage='none';
            inci.style.backgroundImage='linear-gradient(135deg, #FFF6B7 10%, #f5e9d0 100%)';
            setFilters('');
            setILoadingInc(true);
            break;
        case 'users':
            user.style.backgroundImage='linear-gradient(135deg, #FFF6B7 10%, #f5e9d0 100%)';
            inci.style.backgroundImage='none';
            setILoadingInc(false);
            break;

        case 'En proceso':
            iProgress.style.color='orange';
            all.style.color='rgba(0,0,0,.5)';
            iDone.style.color='rgba(0,0,0,.5)';
            setFilters('En proceso');

                break;
        case 'Solucionada':
            iProgress.style.color='rgba(0,0,0,.5)';
            all.style.color='rgba(0,0,0,.5)';
            iDone.style.color='orange';
            setFilters('Solucionada');
                break; 
        case 'Todas':
                iProgress.style.color='rgba(0,0,0,.5)';
                all.style.color='orange';
                iDone.style.color='rgba(0,0,0,.5)';
                setFilters('');
                break;       
        default:
            break;
    }

   
}
    
    return (
    <div className='verticalSideAdmin'>
        <div className='ui orange vertical menu'>
            <a className='teal orange item' style={{backgroundImage: 'linear-gradient(135deg, #FFF6B7 10%, #f5e9d0 100%)'}} onClick={active} id='inc'>
                Incidencias
                <div className='ui  left pointing label'>{countIncidents}</div>
            </a>
            <a className='item' name = 'user' onClick={active} id='users'>
                Usuarios
                <div className='ui label  left pointing'>{countUsers}</div>
            </a>
            <div className='item'>
                <div className='ui transparent icon input'>
                    <input type='text' placeholder='Search mail...'/>
                    <i className='search icon'></i>
                </div>
            </div>
        {
            loadingInc && (  <div className='ui orange vertical verticalSortAdmin text menu'>
                                <div className='header item'>Filtrar por Estado:</div>
                                <a className='item' id='En proceso' onClick={active} >
                                    En proceso
                                </a>
                                <a className='item' id='Solucionada' onClick={active} >
                                    Solucionadas
                                </a>
                                <a className='item' id='Todas' style={{color:'orange'}} onClick={active} >
                                    Todas
                                </a>
                           </div>
                        )
        }

        </div>
    </div>
        
    )
}

export default SidebarVertical
