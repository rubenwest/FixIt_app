import './App.css';
import pruebafondo from "./video/pruebafondo.mp4";
import pruebafondo2 from "./video/pruebafondo2.mp4";

function App() {
  
 
  return (

    <div className="App" id="portada">
      
{/*         <video autoPlay loop muted id="myVideo">
          <source src= {pruebafondo2} type= "video/mp4"/>
        </video> */}
      <div class="box blur">
        <h1>backdrop-filter: blur(5px)</h1>
      </div>
      <div className="login"><input type="text"/></div>

    </div>
    
    );
  }

export default App;
