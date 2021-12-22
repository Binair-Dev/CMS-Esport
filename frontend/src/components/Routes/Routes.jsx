import { Link, useRoutes } from 'react-router-dom';
import { ALERT_NOT_INSTALL, BTN_NEXT } from '../../_config/lang';
import Footer from '../Footer/Footer';
import Index from '../Index/Index';
import Install1 from '../Installation/Install1';
import Install2 from '../Installation/Install2';
import Navbar from '../Navbar/Navbar';

const Routes = ({isInstalled}) => {
    let routes = useRoutes([
        { path: "/", element: <>{isInstalled ? 
        <>
            <Index navbar={<Navbar/>} footer={<Footer/>}/>
        </> : 
        <>
            <div class="container mt-5 mb-5 d-flex justify-content-center color-green text-center">
                <div class="alert alert-danger" role="alert">
                    {ALERT_NOT_INSTALL} <br/>
                    <Link to="/install1" style={{marginLeft:'10px'}} type="button" class="btn btn-danger">{BTN_NEXT}</Link>
                </div>
            </div>
        </>}</> },
        { path: "install1", element: <Index selected={<Install1 />}/> },
        { path: "install2", element: <Index selected={<Install2 />}/> },
      ]);
      return routes;
}
 
export default Routes;