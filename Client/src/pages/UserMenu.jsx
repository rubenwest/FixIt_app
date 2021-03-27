import {useEffect, useState} from 'react';
import {getIncidents , getAllIncidents} from './Users/services/index';
import './css/userMenu.css';
import jwt_decode from "jwt-decode";
import Loading from './components/Loading';
import 'semantic-ui-css/semantic.min.css'; 
import ListIncidents from './components/ListIncidents';
import { Container } from 'semantic-ui-react';
import NewIncident from './components/NewIncident';
import Navbar from './components/Navbar';
import NewIncident2 from './components/NewIncident2';

function UserMenu() {
    
    console.log("UserMenu");

    const token = localStorage.getItem("token");
    const userLoged = jwt_decode(token); 
    const user = userLoged.user.email;
    
    console.log("Cargamos1 Incidencias de: ",user);
    const [incidents, setIncidents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    /* getAllIncidents(); */
  /*   loadIncidents(email); */
    
    async function loadIncidents(user) {

        const resGetIncidents =  await getIncidents(user);

        if (resGetIncidents.status === 201) {
            setIncidents(resGetIncidents.data.incidents) 
            /* console.log(incidents); */ 
            console.log(resGetIncidents.data.incidents[0]);
            
        }
        setIsLoading(false);
    }

    useEffect( ()=>{
        loadIncidents(user);
    },[])

        return (

        <div className="bg-gra-02 p-t-30 ">
            <Container>
                <Navbar />
            </Container>
            
            
            
            {
               isLoading && <Loading />
            }

            {
                /* !isLoading && incidents.length && <ListIncidents incidents={incidents}/> */
                !isLoading && incidents.length && (
                    
                        <div className="gallery">
                            <ListIncidents incidents={incidents}/>
                            <NewIncident />
                        </div>
                    
                )
                
            }
            
        </div> 
    )
};
    

export default UserMenu;