import { ALERT_LOG_OUT_SUCCESS } from '../../_config/lang';
import Copyright from '../Body/Copyright/Copyright';
import Footer from '../Body/Footer/Footer';
import Nav from '../Body/Nav/Nav';
import Head from '../Head/Head';
import '../styles.css'

const Login = () => {
    localStorage.removeItem("accessToken");
    window.location.reload()
    window.location.pathname = "/";

    return (
        <>
        <Head />
        <Nav />
        <div class="container mt-5 mb-5 d-flex justify-content-center color-green text-center" style={{paddingTop: "100px"}}>
            <div class="alert alert-success" role="alert">
            {ALERT_LOG_OUT_SUCCESS}
            </div>
        </div>
        <Footer/>
        <Copyright/>
        </>
    );
}
 
export default Login;