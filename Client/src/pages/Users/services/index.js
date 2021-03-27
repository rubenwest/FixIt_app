import axios from 'axios';

const baseUrl = "http://localhost:8081";



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
        
        window.location.href='./UserMenu';
       
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