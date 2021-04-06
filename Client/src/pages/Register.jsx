import {useState} from 'react';
import { addUser, searchUser } from './services/index'
import './css/register.css';
import Maps from '../pages/components/User_Components/Maps';
import poster from '../pages/img/video.jpg';
import video from '../pages/img/video.mp4';
import Swal from 'sweetalert2';
import Footer from './components/Global_Components/Footer';

function Register() {

  const [details, setDetails] = useState({name: '', surname:'', address: '', email:'', gender:'', password:'', rPassword:''});


  const submitHandler = e => {

        e.preventDefault();

//Primero nos aseguramos que ha rellenado bien los campos de ambas contraseñas

        if (details.password!==details.rPassword) {
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas deben coincidir!'
              })

        }
        else{
            verifyEmail(details);
        }

}

//Verificamos que el email no esté dado de alta en el sistema
async function verifyEmail(details) {

    const responSearch = await searchUser(details);

    if (!responSearch.data.ok) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email ya registrado!'
          })
    }else{
        registerUser(details);
    }
    
}

async function registerUser(details) {

    const responAddUser = await addUser(details);

    if (responAddUser.status===201) {
        
        Swal.fire({
            icon: 'success',
            title: '',
            text: 'Te has registrado en Fix-It!'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href='../';
            }
          })
      
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo ha ido mal!'
          })
    }
}

    return (
        <>

        <div className=' font-poppins vh-100 '>
            <video poster={poster} loop autoPlay muted className='vh-100'>
				<source src={video} type='video/mp4' />
			</video>
            <h1 className='tittle3' style={{fontFamily: 'playlistcaps', fontStyle: 'italic'}}>UNETE</h1>
                <div className='wrapper wrapper--w680 wrapper-padding-50'>
                    <div className='card card-4 box'>
                        <div className='card-body'>
                            <form method='post' onSubmit={submitHandler}>
                                <div className='row row-space'>
                                    <div className='col-2'>
                                        <div className='input-group'>
                                            <label className='label'>Nombre</label>
                                            <input className='input--style-4' type='text' name='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <div className='input-group'>
                                            <label className='label'>Apellidos</label>
                                            <input className='input--style-4' type='text' name='surname' onChange={e => setDetails({...details, surname: e.target.value})} value={details.surname}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row row-space'>
                                    <div className='col-2'>
                                        <div className='input-group'>
                                            <label className='label'>email</label>
                                            <div className='input-group-icon'>
                                                <input className='input--style-4 js-datepicker' type='email' name='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <div className='input-group'>
                                            <label className='label'>Genero</label>
                                            <div className='p-t-10'>
                                                <label className='radio-container m-r-45'>Hombre
                                                    <input type='radio' checked='checked' name='gender' onChange={e => setDetails({...details, gender: e.target.value})} value={details.gender}/>
                                                    <span className='checkmark'></span>
                                                </label>
                                                <label className='radio-container'>Mujer
                                                    <input type='radio' name='gender' onChange={e => setDetails({...details, gender: e.target.value})} value={details.gender}/>
                                                    <span className='checkmark'></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='ui form mb-15'>
                                    <div className='col-6'>
                                        <label className='label'>Localizacion</label>
                                        <Maps  detailsIncidents={details} setDetailsIncidents={setDetails}/>
                                    </div>
                                </div>
                                <div className='row row-space'>
                                    <div className='col-2'>
                                        <div className='input-group'>
                                            <label className='label'>Constraseña</label>
                                            <input className='input--style-4' type='password' name='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <div className='input-group'>
                                            <label className='label'>Confirma Constraseña</label>
                                            <input className='input--style-4' type='password' name='rPassword' onChange={e => setDetails({...details, rPassword: e.target.value})} value={details.rPassword}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-t-15 d-flex-end row-space'>
                                    <button className='btn btn--radius-2 btn--blue' type='submit'>Registrarse</button>
                                </div>
                                <div style={{marginTop:'50px'}}>
                                <p class="Type__TypeElement-sc-9snywk-0 egucdk" id='unete'><span class="LinkContainer-sc-1t58wcv-0 iqOoUm">¿Ya tienes cuenta? <a href="http://localhost:3000">Inicia sesión</a>.</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
      </>
    );
}

export default Register;