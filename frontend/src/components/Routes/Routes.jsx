import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import { ALERT_NOT_INSTALL, BTN_NEXT } from '../../_config/lang';
import Body from '../Body/Body';
import Copyright from '../Body/Copyright/Copyright';
import Head from '../Head/Head';
import Install1 from '../Installation/Install1';
import Install2 from '../Installation/Install2';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import '../styles.css'

const Routes = ({isInstalled}) => {
    let routes = useRoutes([
        { path: "/", element: <>{isInstalled ? 
        <>
          <Head /> 
          <Body />
        </> : 
        <>
            <div class="container mt-5 mb-5 d-flex justify-content-center color-green text-center">
                <div class="alert alert-danger" role="alert">
                    {ALERT_NOT_INSTALL} <br/>
                    <Link to="/install1" style={{marginLeft:'10px', marginTop:'20px'}} type="button" class="btn btn-danger">{BTN_NEXT}</Link>
                </div>
            </div>
            <Copyright />
        </>}</> },
        { path: "install1", element: <Install1 /> },
        { path: "install2", element: <Install2 /> },
        { path: "login", element: <Login /> },
        { path: "logout", element: <Logout /> },
      ]);
      return routes;
}
 
export default Routes;