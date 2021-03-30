import {useState} from 'react';
import { addUser, searchUser } from './services/index'
import './css/register.css';
import Maps from '../pages/components/User_Components/Maps';
import poster from '../pages/img/video.jpg';
import video from '../pages/img/video.mp4';
import hello from '../pages/img/hello.gif';
import swal from 'sweetalert';
import Swal from 'sweetalert2'

 

 

function Register() {

  const [details, setDetails] = useState({name: "", surname:"", address: "", email:"", gender:"", password:"", rPassword:""});


  const submitHandler = e => {

        e.preventDefault();

        console.log("Le enviamos a backend",details.email);


//Primero nos aseguramos que ha rellenado bien los campos de ambas contraseñas

        if (details.password!==details.rPassword) {
            /* swal("Las contraseñas deben coincidir", "", "error"); */
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

async function verifyEmail(details) {

    const responSearch = await searchUser(details);

    if (!responSearch.data.ok) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email ya registrado!'
          })
        console.log(responSearch);
    }else{

        registerUser(details);
        
    }
    
}

async function registerUser(details) {

    const responAddUser = await addUser(details);

    if (responAddUser.status===201) {
        /* swal("Bienvenido al equipo", "", "success"); */

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
        console.log(responAddUser);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        
    }
}


    return (

        <div className=" font-poppins">
            <video poster={poster} loop autoPlay muted>
				<source src={video} type="video/mp4" />
			</video>
                <div className="wrapper wrapper--w680">


                    <div className="card card-4 box">
                    <h2 className="title">Registro</h2>
                <div class="animate__animated animate__bounce animate__delay-5s">Example</div>
                <h1 class="animate__animated animate__bounce">An animated element</h1>
                        <div className="card-body">
                            

                            <form method="post" onSubmit={submitHandler}>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Nombre</label>
                                            <input className="input--style-4" type="text" name="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Apellidos</label>
                                            <input className="input--style-4" type="text" name="surname" onChange={e => setDetails({...details, surname: e.target.value})} value={details.surname}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">email</label>
                                            <div className="input-group-icon">
                                                <input className="input--style-4 js-datepicker" type="email" name="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Gender</label>
                                            <div className="p-t-10">
                                                <label className="radio-container m-r-45">Male
                                                    <input type="radio" checked="checked" name="gender" onChange={e => setDetails({...details, gender: e.target.value})} value={details.gender}/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="radio-container">Female
                                                    <input type="radio" name="gender" onChange={e => setDetails({...details, gender: e.target.value})} value={details.gender}/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="ui form mb-15">
                                    <div className="col-6">
                                        <label className="label">Localizacion</label>
                                        <Maps  detailsIncidents={details} setDetailsIncidents={setDetails}/>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">password</label>
                                            <input className="input--style-4" type="text" name="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Repeat password</label>
                                            <input className="input--style-4" type="text" name="rPassword" onChange={e => setDetails({...details, rPassword: e.target.value})} value={details.rPassword}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-t-15">
                                    <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
    );


}



export default Register;