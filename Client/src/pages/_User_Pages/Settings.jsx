import React from 'react'
import jwt_decode from 'jwt-decode';
import SidebarUser from '../components/User_Components/SidebarUser';
import FormUpdateUser from '../components/User_Components/FormUpdateUser';
import Footer from '../components/Global_Components/Footer';
import '../css/register.css';

const Settings = () => {

    const token = localStorage.getItem('token');
    const userLoged = jwt_decode(token); 
    const user = userLoged.user.email;

    return (
        <>
        
            <header>
            <SidebarUser /> 
            </header>
            <div className='bg-gra-menu vh-100 d-flex-normal'> 
                <div  className= 'wrapper wrapper--w960'>
                    <FormUpdateUser user={user}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Settings
