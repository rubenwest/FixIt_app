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
        console.log('Filtro: ',filters);

        break;

      case 'Solventadas':

        iProgress.style.color = 'rgba(0,0,0,.5)';
        iDone.style.color = 'orange';
        setFilters('');
        console.log('Filtro: ',filters);

        break;
      case 'contact':

      default:
        break;
    }
  }

  function contact() {

    Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
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
