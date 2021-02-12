import {useState} from 'react';
import './css/login.css';
//Aqui importamos nuestra imagen
import logo from "./img/logo.png"

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
      response.json()
      console.log("lavida1:");
      
    })
    .then(data => {
      console.log("lavida2:",data);
    }); 

}

  const Login = details => {
    console.log(details);

  };
  
/*   const logout = () => {
  console.log("logout");
  } */

    return (

          <div className="container-login">
            <div className="login-wrapper">
              <div className="text-center">
                  <img src={logo} className="img-responsive" alt=""/>
              </div>
              <div className="mt-10">
                  <form id="_dologin" method="post" onSubmit={submitHandler}>
                    <input className="form-control" name="email" type="text" placeholder="Correo electrónico" required="" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    <input className="form-control" name="password" type="password" placeholder="Contraseña" required="" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    <div className="text-center">
                          <input type="submit" className="signup" value="Acceder"/>
                    </div>
                  </form>
              </div>
              <div id="remember_container">        
                  <div className="text-center">
                      <a href="../forgot-password" rel="nofollow" className=""> ¿Olvidaste tu contraseña?</a>        
                  </div>
              </div>
            </div>
          </div>
            
        );
}
    
export default Login;