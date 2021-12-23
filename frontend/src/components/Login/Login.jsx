import Footer from "../Footer/Footer";
import { ALERT_LOG_IN_FAIL, ALERT_LOG_IN_SUCCESS, BTN_LOG_IN, PLACEHOLDER_LOGIN_USERNAME, PLACEHOLDER_PASSWORD, TITLE_LOGIN } from "../../_config/lang";
import axios from "axios";
import { getApiURL } from "../../_config/config";
import { useState } from "react";
import { sha256 } from "../../_tools/password-hash";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(0);


    const handleSubmit = async (e) => {
        e.preventDefault();
        let pass = await sha256(password);

        if(!isLoading) {
            setLoading(true);
            setError(null);
            axios.post(getApiURL() + "login", {
                Pseudo: username, 
                Password: pass,
            }).then(response => {
                setSuccess(response.status);
                localStorage.setItem("accessToken", response.data.accessToken)
            }).catch(e => {
                setError(e.error);
                setSuccess(e.status);
            }).finally(() => {
                setLoading(false);
            })
        }
    }

    if(success === 200) {
        window.location.reload()
        window.location.pathname = "/";
    }

    return (
        <>
        {success === 0 ?
        <>
        <div class="container mt-5 mb-5 justify-content-center" style={{width: "500px", paddingTop: "100px"}}>
            <div class="card px-1 py-4">
                <div class="card-body">
                    <form onSubmit={handleSubmit} class="form-signin">
                        <div class="text-center mb-4">
                            <h1 class="h3 mb-3 font-weight-normal">{TITLE_LOGIN}</h1>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_LOGIN_USERNAME} required autofocus></input>
                            <br/>
                        </div>
                        <div class="form-label-group text-center">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" class="form-control" placeholder={PLACEHOLDER_PASSWORD} required autofocus></input>
                            <br/>
                        </div>

                        <div class="container">
                            <div class="col text-center">
                                <button class="btn btn-primary btn-block confirm-button">{BTN_LOG_IN}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
        : 
        <>
        {success !== 200 ?
        <>
        <div class="container mt-5 mb-5 d-flex justify-content-center color-green text-center" style={{paddingTop: "100px"}}>
            <div class="alert alert-danger" role="alert">
            {ALERT_LOG_IN_FAIL}
            </div>
        </div>
        </> :
        <>
        <div class="container mt-5 mb-5 d-flex justify-content-center color-green text-center" style={{paddingTop: "100px"}}>
            <div class="alert alert-success" role="alert">
            {ALERT_LOG_IN_SUCCESS}
            </div>
        </div>
        </>}
        <div class="container mt-5 mb-5 justify-content-center" style={{width: "500px"}}>
            <div class="card px-1 py-4">
                <div class="card-body">
                    <form onSubmit={handleSubmit} class="form-signin">
                        <div class="text-center mb-4">
                            <h1 class="h3 mb-3 font-weight-normal">{TITLE_LOGIN}</h1>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_LOGIN_USERNAME} required autofocus></input>
                            <br/>
                        </div>
                        <div class="form-label-group text-center">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" class="form-control" placeholder={PLACEHOLDER_PASSWORD} required autofocus></input>
                            <br/>
                        </div>

                        <div class="container">
                            <div class="col text-center">
                                <button class="btn btn-primary btn-block confirm-button">{BTN_LOG_IN}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
        }</>
    );
}
 
export default Login;