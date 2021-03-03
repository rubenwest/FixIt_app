import {useState} from 'react';
import {Link} from "react-router-dom";
import './css/login.css';
//Aqui importamos nuestra imagen
import logo from "./img/logo2.png";
import poweredby from "./img/powered2.png";


function Login() {
    
  const [details, setDetails] = useState({email: "", password:""});

  const submitHandler = e => {

    e.preventDefault();
    console.log("Le enviamos a backend",details);

      // Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details)
    };
  
    fetch('http://localhost:3000/login', requestOptions)

    .then(response => {
      console.log(response);
      return response;
      
    })
    .then(response=>{

      if (response.ok) {
        alert("LOGIN CORRECTO!");
        window.location.href='./UserMenu';
        
      }else{
        alert("Login Incorrecto =(")
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

    return (

          <div className="container-login">
            <div  className="login-wrapper">
              <div className="text-center">
                  <div className="mt-20">
                    <img src={logo} alt=""/>
                  </div>
                  <div className="mt-20">
                    <form id="_dologin" method="post" onSubmit={submitHandler}>
                      <input id="email" className="form-control" name="email" type="text" placeholder="Correo electrónico" required="" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                      <input id="pass" className="form-control" name="password" type="password" placeholder="Contraseña" required="" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                      <div className="text-center mt-20">
                            <input type="submit" className="signup" value="Acceder"/>
                      </div> 
                    </form>
                  </div>
                  <div className="mt-20">
                    <Link to='./Register' className="torange">Don't have an account? Sign Up</Link>
                  </div>
                  <div className="mt-20 pt-10">
                    <Link to="./ForgotPassword" className="torange">¿Olvidaste tu contraseña?</Link>
                  </div>
                  <div className="powered">
                  <img src={poweredby} alt=""/>
                  </div>
                  
              </div>
            </div>
          </div>
            
        );
}
    
export default Login;