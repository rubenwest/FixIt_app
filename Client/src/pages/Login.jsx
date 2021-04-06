import React, {useState} from 'react';
import {doLogin} from './services/index';
import {Link} from 'react-router-dom';
import './css/login.css';
import Swal from 'sweetalert2';
//Aqui importamos nuestra imagen
import logo from './img/logo2.png';
import poweredby3 from './img/poweredby3.png';


function Login() {
    
  const [details, setDetails] = useState({email: '', password:''}); 

  const submitHandler = e => {

    e.preventDefault();
    doLogin(details);

}

const ForgotPassword = e => {

  Swal.fire({
    title: 'Introduce tu email',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    showLoaderOnConfirm: true,
    preConfirm: () => {

      return fetch(`http://localhost:8081/user/sendEmail`)

        .then(response => {

          if (!response.ok) {
            throw new Error(response.statusText)
          }
          
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
        title: `Constreña enviada! No olvides revisar spam!`,
        imageUrl: result.value.avatar_url
      })
    }
  })

}

    return (

          <div className='container-login'>
            <div  className='login-wrapper'>
              <div className='text-center'>
                  <div className='mt-20'>
                    <img src={logo} alt=''/>
                  </div>
                  <div className='mt-20'>
                    <form id='_dologin' method='post' onSubmit={submitHandler}>
                      <input id='email' className='form-control' name='email' type='text' placeholder='Correo electrónico' required onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                      <input id='pass' className='form-control' name='password' type='password' placeholder='Contraseña' required onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                      <div className='text-center mt-20'>
                            <input type='submit' className='signup' value='Acceder'/>
                      </div> 
                    </form>
                  </div>
                  <div className='mt-20'>
                    <Link to='./Register' className='torange'>¿Todavía no tienes cuenta? Creala!</Link>
                  </div>
                  <div className='mt-20 pt-10'>
                    <a onClick={ForgotPassword} className='torange'>¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className='powered'>
                    <img src='https://img.icons8.com/nolan/64/pirates-of-the-caribbean.png'/>
                    <img src={poweredby3} alt=''/>
                  </div>
              </div>
            </div>
          </div>
        );
}
    
export default Login;