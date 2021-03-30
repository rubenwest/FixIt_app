import React from 'react'
import jwt_decode from "jwt-decode";
import SidebarUser from '../components/User_Components/SidebarUser';
import FormUpdateUser from '../components/User_Components/FormUpdateUser';
import Footer from '../components/Global_Components/Footer';
import '../css/register.css';

const Settings = () => {

    const token = localStorage.getItem("token");
    const userLoged = jwt_decode(token); 
    const user = userLoged.user.email;

    return (
<>
        <div className="bg-gra-menu p-t-130 p-b-100 font-poppins">
            <SidebarUser />
            <div className="wrapper wrapper--w960 d-flex-normal-2"> 

                    <FormUpdateUser user={user}/>

            </div>
            
        </div>
        <Footer />
        </>
    )
}

export default Settings
