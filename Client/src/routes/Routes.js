import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Login from '../pages/Login';
import UserMenu from "../pages/UserMenu";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

function Routes() {
    return(
        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/UserMenu" component={UserMenu}/>
                <Route exact path="/Register" component={Register}/>
                <Route exact path="/ForgotPassword" component={ForgotPassword}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;


