import React, { useState, useEffect } from 'react';

import { getApiURL } from '../../_config/config';
import { ALERT_INSTALL_PASSWORD_NOT_EQUALS, ALERT_INSTALL_SUCCESS, BTN_NEXT, BTN_VALID, PLACEHOLDER_EMAIL, PLACEHOLDER_FIRSTNAME, PLACEHOLDER_LASTNAME, PLACEHOLDER_PASSWORD, PLACEHOLDER_PASSWORD_CONFIRM, PLACEHOLDER_USERNAME, PLACEHOLDER_WEBSITE_DESCRIPTION, PLACEHOLDER_WEBSITE_NAME, SUB_TITLE_INSTALL_PART_1, SUB_TITLE_INSTALL_PART_2, TITLE_INSTALL_PART_1, TITLE_INSTALL_PART_2 } from '../../_config/lang';
import { Link } from 'react-router-dom';

import Copyright from '../theme/Body/Copyright/Copyright';
import axios from 'axios'
import { sha256 } from '../../_tools/password-hash';
import '../styles.css'


const Install2 = () => {

    const [pseudo, setPseudo] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [mdp, setMdp] = useState('');
    const [mdpconfirm, setMdpConfirm] = useState('');

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [alreadyDone, setalreadyDone] = useState(false);
    const [success, setSuccess] = useState(false);
    const [amount, setAmount] = useState(0);


    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get(getApiURL() + "user").then(response => {
            if(response.data !== null && response.data.amount === 0){
                setAmount(response.data.amount);
                setalreadyDone(false);
            } else setalreadyDone(true);
        }).catch(e => {
            setError(e.error)
        }).finally(() => {
            setLoading(false);
        })
    }, alreadyDone);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let pass = await sha256(mdp);
        if(!isLoading) {
            setLoading(true);
            setError(null);
            axios.post(getApiURL() + "user", {
                Pseudo: pseudo,
                Nom: nom,
                Prenom: prenom,
                Email: email,
                Password: pass,
                isAdmin: true
            }).then(response => {
                setSuccess(response.status)
            }).catch(e => {
                setError(e.error)
            }).finally(() => {
                setLoading(false);
            })
        }
    }

    const refreshPage = () => {
        window.location.reload()
        window.location.pathname = "/";
    }
    
    return (
        <>
        {success === 200 || alreadyDone ? 
        <>
        <div class="container mt-5 mb-5 d-flex justify-content-center color-green text-center">
            <div class="alert alert-success" role="alert">
            {ALERT_INSTALL_SUCCESS}<button style={{marginLeft:'10px'}} type="button" class="btn btn-success" onClick={refreshPage}>{BTN_NEXT}</button>
            </div>
        </div>
        </> : 
        <>
        <div class="container mt-5 mb-5 d-flex justify-content-center">
            <div class="card px-1 py-4">
                <div class="card-body">
                    <form onSubmit={handleSubmit} class="form-signin">
                        <div class="text-center mb-4">
                            <h1 class="h3 mb-3 font-weight-normal">{TITLE_INSTALL_PART_2}</h1>
                            {SUB_TITLE_INSTALL_PART_2}
                        </div>

                        <div class="form-label-group text-center">
                            <input value={pseudo} onChange={(e) => setPseudo(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_USERNAME} required autofocus></input>
                            <br/>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_LASTNAME} required autofocus></input>
                            <br/>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_FIRSTNAME} required autofocus></input>
                            <br/>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="inputText" class="form-control" placeholder={PLACEHOLDER_EMAIL} required autofocus></input>
                            <br/>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={mdp} onChange={(e) => setMdp(e.target.value)} type="password" id="inputText" class="form-control" placeholder={PLACEHOLDER_PASSWORD} required autofocus></input>
                            <br/>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={mdpconfirm} onChange={(e) => setMdpConfirm(e.target.value)} type="password" id="inputText" class="form-control" placeholder={PLACEHOLDER_PASSWORD_CONFIRM} required autofocus></input>
                            {mdp !== mdpconfirm && <p>{ALERT_INSTALL_PASSWORD_NOT_EQUALS}</p>}
                            <br/>
                        </div>

                        <div class="container">
                            <div class="col text-center">
                                <button style={{marginTop: "25px"}} class="btn btn-primary btn-block confirm-button">{BTN_VALID}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
        }
        <Copyright></Copyright>
        </>
    );
}
 
export default Install2;