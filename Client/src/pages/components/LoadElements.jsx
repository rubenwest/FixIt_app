import React from 'react';
import '../css/maps.css';

export default function LoadElements({elements}) {

    console.log("Cargamos los elements: ",elements);
    console.log("Tamaño de elements: ",elements.length);

    if (elements.length > 0) {
        return (
            <select multiple="" className="ui dropdown">
                <option placeholder="Elige (Farola, Papelera ...)"></option>
        <>
                    {
                    elements.map(({element}) => {
    
                        return(
                                
                                <option key={element} value={element}>{element}</option>
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
