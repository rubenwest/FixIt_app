import React, { useState } from 'react'
export const ThemeContext = React.createContext();

const Context = (props) => {

    const [userLoged, setUserLoged] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        state: true
    }); 

    return (
        <ThemeContext.Provider value= {{ userLoged, setUserLoged } }>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default Context