import './css/login.css';
//Aqui importamos nuestra imagen
import logo from "./img/logo.png"

function Login() {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'React POST Request Example', password: 'la contrasñea' })
  };

  fetch('http://localhost:3000/login', requestOptions)
  .then(response => response.json())
  .then(data => this.setState({ postId: data.id }));

    return (

        
          <div className="container-login">
            <div className="login-wrapper">
              <div className="text-center">
                  <img src={logo} className="img-responsive" alt=""/>
              </div>
              <div className="mt-10">
                  <form id="_dologin" method="post">
                    <input className="form-control" name="user" value={username} type="text" placeholder="Correo electrónico" required=""/>
                    <input className="form-control" name="password" type="password" placeholder="Contraseña" required=""/>
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