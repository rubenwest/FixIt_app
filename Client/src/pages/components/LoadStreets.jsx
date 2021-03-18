import React from 'react'

export default function LoadStreets({data}) {

    console.log("Cargamos las calles: ",data);
    console.log("Cargamos las calles: ",data.length);

    if (data.length > 0) {
        return (
            <select className="ui dropdown">
                <option></option>
        <>
                    {
                    data.map(({street}) => {
    
                        return(
                                
                                <option key={street} value={street}>{street}</option>
                        )
                    })
    
                }
                    
                
        </>  
            </select>     
        )
    }
    else{
        return null 
        console.log("loading");
    }
    
}
