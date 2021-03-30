import {useEffect, useState} from 'react';
import { getAllIncidents} from '../services/index';
import Loading from '../components/Global_Components/Loading.jsx';
import SidebarTop from '../components/Admin_Components/SidebarAdminTop';
import SidebarVertical from '../components/Admin_Components/SidebarVerticalAdmin';
import TableIncidents from '../components/Admin_Components/TableIncidents'

function AdminMenu() {
    
    console.log("AdminMenu");

/*     const token = localStorage.getItem("token");
    const userLoged = jwt_decode(token); 
    const user = userLoged.user.email; */
    
    console.log("Cargamos todas las Incidencias");

    const [incidents, setIncidents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
       
    async function LoadIncidents() {

        const resGetIncidents =  await getAllIncidents();

        if (resGetIncidents.status === 200) {
            setIncidents(resGetIncidents.data.incidents) 
 
            console.log(resGetIncidents.data.incidents[0]);
            
        }
        setIsLoading(false);
    }

    useEffect( ()=>{
        LoadIncidents();
    },[])

        return (

        <div className="bg-gra-menu d-flex-normal">
{/*             <Container>
                <Navbar />
            </Container> */}
            <SidebarVertical />
            <SidebarTop />

            {
               isLoading && <Loading />
            }


{

                !isLoading && incidents.length && (
                    
                        <div className="gallery">
                            
                            <TableIncidents />
                            
                        </div>
                    
                )
                
            }
            
        </div> 
    )
};
    

export default AdminMenu;