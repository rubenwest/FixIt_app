import React from 'react';
import VerticalOptions from './VerticalOptions';
import { useState, useEffect } from 'react';
import {loadUser , editUser } from '../../services/index';
import swal from 'sweetalert';

const FormUpdateUser = ({user}) => {
    
const [detailsUsers, setdetailsUsers] = useState({
            address: "",
        email: "",
        name: "",
        password: "",
        surname: "",
        password: "",
        rpassword: ""
});

async function loadDataUser(user) {
        
    const resLoadUser = await loadUser(user);

    if (resLoadUser.status === 201) {
        setdetailsUsers(resLoadUser.data.users[0]);

    }else{
        console.log(resLoadUser.status);
    }

}

useEffect( ()=>{
    loadDataUser(user);
},[])


    
const handelChange = (e) =>{

    const {name, value} = e.target    
    setdetailsUsers({...detailsUsers, [name]: value})

}

const _handleSubmit = (e) => {

    e.preventDefault();

    /* handleSubmit({...detailsIncide11nts, image: inputFileRef.current.files[0]}); */

    console.log("detailsUsers: ", detailsUsers)
    const realPass = localStorage.getItem("password");

    console.log("password: ",    detailsUsers.password);
    console.log("rpassword: ",detailsUsers.rpassword);
    console.log("realPass: ",realPass);

    if ( detailsUsers.password === detailsUsers.rpassword && detailsUsers.password === realPass) {

        const resEditUser =  editUser(detailsUsers);

        if (resEditUser.status === 201) {
            setdetailsUsers(resEditUser.data.users);     
        }else{
            console.log(resEditUser.status);
            
        }
    
        window.location.href='./Settings';
    }else
    {
        swal("Las contraseñas deben coincidir", "", "error");
    }

/*     */

}

/* name="name" value= {details.name} */
    return (
        <form onSubmit={_handleSubmit}>
            <h2 className="ui header">
                <i className="settings icon"></i>
                <div>
                    Account Settings
                    <div className="sub header">Modifica tus datos</div>
                </div>
                </h2>
            <div className="card card-4 ">

                <div className="card-body d-flex-normal">
                    <VerticalOptions />
                    <div className='separeBar'></div>
                    <div className='centralSection'>   
                    <div className="ui form">
                        <div className="fields">
                            <div className="field">
                                <label>Nombre</label>
                                <input type="text" name="name" placeholder={detailsUsers.name} onChange={handelChange} /* value={detailsUsers.name} *//>
                            </div>
                            <div className="field ">
                                <label>Apellidos</label>
                                <input type="text" name="surname" placeholder={detailsUsers.surname}  onChange={handelChange}  /* value={detailsUsers.surname} *//>
                            </div>
                        </div>
                        <div className="field">
                                <label>Dirección</label>
                                <input type="text" name="address" placeholder={detailsUsers.address}  onChange={handelChange} /* value={detailsUsers.address} */ />
                        </div>
                        <div className="fields">
                            <div className="field">
                                <label >Password</label>
                                <input type="password" name="password" placeholder="Password" onChange={handelChange} />
                            </div>
                            <div className="field ">
                                <label>Confirm Password</label>
                                <input type="password" name="rpassword" placeholder="Repeat Password" onChange={handelChange} />
                            </div>
                        </div>
                        <button className="ui secondary button m-25">
                            Actualizar
                        </button>                   
                    </div>
                </div>
            </div>
        </div>
    </form>
    )
}

export default FormUpdateUser
