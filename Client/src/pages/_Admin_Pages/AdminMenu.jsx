import {useEffect, useState} from 'react';
import { getAllIncidents, getAllUsers} from '../services/index';
import SidebarTop from '../components/Admin_Components/SidebarAdminTop';
import SidebarVertical from '../components/Admin_Components/SidebarVerticalAdmin';
import TableIncidents from '../components/Admin_Components/TableIncidents';
import TableUsers from '../components/Admin_Components/TableUsers';
import '../css/adminMenu.css'
import Footer from '../components/Global_Components/Footer';
function AdminMenu() {

    const [incidents, setIncidents] = useState([]);
    const [countIncidents, setCountIncidents] = useState(0);
    const [countUsers, setCountUsers] = useState(0);
    const [filters, setFilters] = useState("");
    const [users, setUsers] = useState([]);
    const [loadingInc, setILoadingInc] = useState(true);
    
    async function LoadUsers() {

        const resGetUsers =  await getAllUsers();

        if (resGetUsers.status === 200) {
            setUsers(resGetUsers.data.users) 
            setCountUsers(resGetUsers.data.users.length)
        
        }
    }

    useEffect( ()=>{
        LoadUsers();
    },[])

    async function LoadIncidents() {

        const resGetIncidents =  await getAllIncidents();

        if (resGetIncidents.status === 200) {

            setIncidents(resGetIncidents.data.incidents) 
            
            let incidentsActives = resGetIncidents.data.incidents.filter( (incident) => incident.state == 'En proceso')
            setCountIncidents(incidentsActives.length);
            
        }
    }

    useEffect( ()=>{
        LoadIncidents();
    },[])

        return (

        <>

        <div className='bg-gra-menu'>

            <header>
            
                <SidebarTop />
            </header>
        
            {
                
                loadingInc && (
                    <div className='d-flex-normal-2'>
                        <SidebarVertical 
                            loadingInc = {loadingInc} 
                            setILoadingInc = {setILoadingInc}
                            incidents = {incidents}
                            users = {users}
                            filters = {filters}
                            setFilters = {setFilters}
                            countIncidents = {countIncidents} 
                            countUsers = {countUsers} 
                            
                        /> 
                        <div className='container'>
                                <TableIncidents incidents={incidents} setIncidents={setIncidents} filters={filters} countIncidents={countIncidents} setCountIncidents = {setCountIncidents}/>
                        </div>
                    </div> 
                )
                
            }
            {
                
                !loadingInc && (
                    
                    <div className='d-flex-normal-2'>
                        <SidebarVertical 
                            loadingInc = {loadingInc} 
                            setILoadingInc = {setILoadingInc}
                            incidents = {incidents}
                            users = {users}
                            filters = {filters}
                            setFilters = {setFilters}
                            countIncidents = {countIncidents} 
                            countUsers = {countUsers} 
                        /> 
                        <div className='container'> 
                            <TableUsers users={users} setUsers={setUsers}/>
                        </div>
                    </div> 
                )
            }
            
        </div> 
        <Footer />   
        </>         
    )
};
    

export default AdminMenu;