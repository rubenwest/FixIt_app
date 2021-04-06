import {BrowserRouter, Switch, Route} from 'react-router-dom'; 

import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import HomePage from '../pages/HomePage';
import UserMenu from '../pages/_User_Pages/UserMenu.jsx';
import IncidentRegister from '../pages/_User_Pages/IncidentRegister.jsx';
import Settings from '../pages/_User_Pages/Settings';
import AdminMenu from '../pages/_Admin_Pages/AdminMenu';
import landingFixIt from '../pages/landingFixIt.jsx';

function Routes() {
    return(
        
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/UserMenu' component={UserMenu}/>
                <Route exact path='/Register' component={Register}/>
                <Route exact path='/ForgotPassword' component={ForgotPassword}/>
                <Route exact path='/IncidentRegister' component={IncidentRegister}/>
                <Route exact path='/HomePage' component={HomePage}/>
                <Route exact path='/Settings' component={Settings}/>
                <Route exact path='/AdminMenu' component={AdminMenu}/>
                <Route exaxt path='/FixIt' component={landingFixIt} />
            
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;



