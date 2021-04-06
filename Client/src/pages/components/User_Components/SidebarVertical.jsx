import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../css/userMenu.css';
import Swal from 'sweetalert2';

const SidebarVertical = ({countIncidents, setCountIncidents, filters, setFilters}) => {

  function active(e) {

    var iProgress = document.getElementById('En proceso');
    var iDone = document.getElementById('Solventadas');
    var contact = document.getElementById('contact');

    switch (e.target.id) {

      case 'En proceso':
        iProgress.style.color = 'orange';
        iDone.style.color = 'rgba(0,0,0,.5)';
        setFilters('En proceso');

        break;

      case 'Solventadas':

        iProgress.style.color = 'rgba(0,0,0,.5)';
        iDone.style.color = 'orange';
        setFilters('');

        break;
      case 'contact':

      default:
        break;
    }
  }

  function contact() {

    const { value: text } =  Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      Swal.fire(text)
    }

  }

  return (
    <>
      <div className='sideVerticalUser'>
        <div className='ui orange vertical menu'>
          <a
            className='teal orange item'
            style={{
              backgroundImage:
                'linear-gradient(135deg, #FFF6B7 10%, #f5e9d0 100%)',
            }}
            id='inc'
          >
            Incidencias
            <div className='ui  left pointing label'>{countIncidents}</div>
          </a>
          <div className='ui orange vertical verticalSortAdmin text menu'>
            <div className='header item'>Filtrar por Estado:</div>
            <a className='item' id='En proceso' onClick={active}>
              En proceso
            </a>
            <a className='item' id='Solventadas' onClick={active}>
              Historial
            </a>
          </div>
          <div className='ui orange vertical verticalSortAdmin text menu'>
            <div className='header item'>Contactanos</div>
            <a className='item' id='contact' onClick={contact}>
              Contacto
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarVertical;
