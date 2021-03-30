import axios from 'axios';

const baseUrl = "http://localhost:8081";

/*  LOGIN */
/* ******* */
export async function doLogin(details) {

    console.log("Login"); 
    console.log("details",details); 
    
    try {

        const response = await axios({
            url: `${baseUrl}/login`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(details)
        }) 

        localStorage.setItem("token",response.data.token);
        localStorage.setItem("password",details.password);

        console.log(response.data.user);
        if (response.data.user.role === "USER") {
            window.location.href='./UserMenu';
        }else{
            window.location.href='./AdminMenu';
        }        
       
    } catch (error) {
        console.log("Error: ",error);
    }

}

/*  USERS */
/* ******* */

export function searchUser(details) {
        
    try {

        const response = axios({
            url: `${baseUrl}/user/search`,
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            data: JSON.stringify(details)
        })

        return response

        }  catch (error) {
            console.log("Error: ",error);
        }

}

export async function addUser(details) {

    console.log("Esto le enviamos al registro: ",details);

    try {

        const response = await axios({
            url: `${baseUrl}/user/newUser`,
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            data: JSON.stringify(details)
        }) 
         return response
       
    } catch (error) {
        console.log("Error: ",error);
    }

}
    
export async function editUser(userData) {

    console.log("editUser con ",userData);
    console.log("editUser id ",userData._id);

    
    try {


        const response = await axios({
            url: `${baseUrl}/user/editUser`,
            method: 'POST',
            data: {
                id: userData._id,
                name: userData.name,
                surname: userData.surname,
                address: userData.address,
            }
        }) 
         return response
       
    } catch (error) {
        console.log("Error: ",error);
    }

}
    
export async function loadUser(user) {

    const formData = new FormData();

    formData.append('user', user)
    console.log("LLamada a loadUsers con",user); 
    try {

        const response = await axios({
            url: `${baseUrl}/user/loadUsers`,
            method: 'POST',
            data: {user: user}
        }) 
        console.log("response: ",response);
        return response
       
    } catch (error) {
        console.log("Error: ",error);
    }

}

export async function getAllUsers() {

    try {
        const response = await axios({
            url: `${baseUrl}/user`,
            method: 'GET',
            
        })

        return response
       
    } catch (error) {
        console.log("Error: ",error);
    }

}

/*  INCIDENTS */
/* ************ */

export async function saveIncident(incidentData) {

    console.log("saveIncident "); 
    
    try {

        const formData = new FormData();

        formData.append('user', incidentData.email)
        formData.append('element', incidentData.element)
        formData.append('incidentType', incidentData.incidentType)
        formData.append('address', incidentData.address)
        formData.append('description', incidentData.description)
        formData.append('image', incidentData.image)
        

        const response = await axios({
            url: `${baseUrl}/incident/newIncident`,
            method: 'POST',
            data: formData
        }) 
         return response
       
    } catch (error) {
        console.log("Error: ",error);
    }

}

export async function getIncidents(user) {

    const formData = new FormData();
    formData.append('user', user)
    console.log("LLamada a getIncidents con",user); 
    try {

        const response = await axios({
            url: `${baseUrl}/incident/loadIncidents`,
            method: 'POST',
            data: {user: user}
        }) 
        console.log(response);
        
        return response
       
    } catch (error) {
        console.log("Error: ",error);
    }

}

export async function getAllIncidents() {


    try {
        const response = await axios({
            url: `${baseUrl}/incident`,
            method: 'GET',
            
        })

        return response
       
    } catch (error) {
        console.log("Error: ",error);
    }

}


export async function getElements() {

    console.log("getElements"); 

    try {
        const response = await axios({
            url: `${baseUrl}/Element`,
            method: 'GET',
            
        })
        return response
       
    } catch (error) {
        console.log("Error: ",error);
    }

}

export async function getTypeIncidents() {

    console.log("getTypeIncidents");

    try {
        const response = await axios({
            url: `${baseUrl}/LoadIncidentsTypes`,
            method: 'GET',
            
        })
        return response
       
    } catch (error) {
        console.log("Error: ",error);
    }
    
}
