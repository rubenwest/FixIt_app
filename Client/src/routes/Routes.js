import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Login from '../pages/Login';
import UserMenu from "../pages/UserMenu";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";
import ForgotPassword from "../pages/ForgotPassword";

function Routes() {
    return(
        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/UserMenu" component={UserMenu}></Route>
                <Route exact path="/Register" component={Register}></Route>
                {/* <Route exact path="/Register2" component={Register2}></Route> */}
                <Route exact path="/ForgotPassword" component={ForgotPassword}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;


