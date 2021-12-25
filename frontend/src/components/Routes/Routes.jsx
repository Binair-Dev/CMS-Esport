import { Link, useRoutes } from 'react-router-dom';
import { ALERT_NOT_INSTALL, BTN_NEXT } from '../../_config/lang';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import Install1 from '../Installation/Install1';
import Install2 from '../Installation/Install2';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Navbar from '../Navbar/Navbar';
import Page from '../Page/Page';

const Routes = ({isInstalled}) => {
    let routes = useRoutes([
        { path: "/", element: <>{isInstalled ? 
        <>
            <Page navbar={<Navbar/>} selected={<Home/>}/>
        </> : 
        <>
            <div class="container mt-5 mb-5 d-flex justify-content-center color-green text-center">
                <div class="alert alert-danger" role="alert">
                    {ALERT_NOT_INSTALL} <br/>
                    <Link to="/install1" style={{marginLeft:'10px'}} type="button" class="btn btn-danger">{BTN_NEXT}</Link>
                </div>
            </div>
        </>}</> },
        { path: "install1", element: <Page selected={<Install1 />}/> },
        { path: "install2", element: <Page selected={<Install2 />}/> },
        { path: "login", element: <Page navbar={<Navbar/>} selected={<Login />}/> },
        { path: "logout", element: <Page navbar={<Navbar/>} selected={<Logout />}/> },
        { path: "admin", element: <Page navbar={<Navbar/>} selected={<Admin />}/> },
      ]);
      return routes;
}
 
export default Routes;