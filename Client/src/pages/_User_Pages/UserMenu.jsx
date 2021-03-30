import {useEffect, useState} from 'react';
import {getIncidents} from '../services/index';
import '../css/userMenu.css';
import jwt_decode from "jwt-decode";
import Loading from '../components/Global_Components/Loading';
import 'semantic-ui-css/semantic.min.css'; 
import ListIncidents from '../components/User_Components/ListIncidents';
import NewIncident from '../components/User_Components/NewIncident';
import SidebarUser from '../components/User_Components/SidebarUser';
import SidebarVertical from '../components/User_Components/SidebarVertical';


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

        <div className="bg-gra-menu d-flex-normal">
{/*             <Container>
                <Navbar />
            </Container> */}
            <SidebarVertical />
            <SidebarUser />

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