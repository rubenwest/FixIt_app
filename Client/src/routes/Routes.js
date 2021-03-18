import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Login from '../pages/Login.jsx';
import UserMenu from "../pages/UserMenu.jsx";
import Register from "../pages/Register.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import IncidentRegister from "../pages/IncidentRegister.jsx";


function Routes() {
    return(
        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/UserMenu" component={UserMenu}/>
                <Route exact path="/Register" component={Register}/>
                <Route exact path="/ForgotPassword" component={ForgotPassword}/>
                <Route exact path="/IncidentRegister" component={IncidentRegister}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;


