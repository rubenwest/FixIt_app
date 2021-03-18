import {useState} from 'react';
import './css/register.css';



function Register() {

  const [details, setDetails] = useState({first_name: "", last_name:"", email:"", gender:"", password:"", rPassword:""});

  const submitHandler = e => {

        e.preventDefault();
        console.log("Le enviamos a backend",details.email);


//Primero nos aseguramos que ha rellenado bien los campos de ambas contraseñas

        if (details.password==details.rPassword) {
                
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(details)
                };  
                //Buscamos el email en la BBDD para controlar no crear
                fetch('http://localhost:3000/search', requestOptions)

                .then(response => {
                            console.log(response);
                            return response;
                        })
                .then(response=>{
                        console.log("Respuesta: ",response);
                        if (!response.ok) {
                            let userExist = response.ok;
                            alert("El usuario ya existe");
                        }else{
                            console.log("hacer el alta de usuario");
                            userRegistration(details);
                        } 
                        })
                .catch((error) => {
                        console.log(error);
                        });

        }else{
            alert("Las password deben ser iguales")
        }
    }

    function userRegistration(details) {

        console.log("Esto le enviamos al registro: ",details);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        };

        fetch('http://localhost:3000/User', requestOptions)
        .then(response => {
            console.log(response);
            return response;
        })
        .then(response=>{
            if (!response.ok) {
                alert("Algo ha ido mal");
            }else{
                console.log("Insertado bro");
                alert("Usuario insertado");
            } 
            })
        .catch((error) => {
               console.log(error);
              });
    }

    return (

        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                <div className="wrapper wrapper--w680">
                    <div>
                        <p className="alert alert-error" role="alert">
                            Lo sentimos. Este email ya existe en nuestra base de daots, indique un email valido.
                        </p>
                    </div>
                    <div className="card card-4">

                        <div className="card-body">
                            <h2 className="title">Registro</h2>
                            <form method="post" onSubmit={submitHandler}>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Nombre</label>
                                            <input className="input--style-4" type="text" name="first_name" onChange={e => setDetails({...details, first_name: e.target.value})} value={details.first_name}/>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Apellidos</label>
                                            <input className="input--style-4" type="text" name="last_name" onChange={e => setDetails({...details, last_name: e.target.value})} value={details.last_name}/>
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