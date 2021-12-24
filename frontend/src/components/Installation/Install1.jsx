import { useState, useEffect } from 'react';
import { getApiURL } from '../../_config/config';
import { ALERT_INSTALL_SUCCESS, BTN_NEXT, BTN_VALID, PLACEHOLDER_WEBSITE_ABOUT, PLACEHOLDER_WEBSITE_COUNTRY, PLACEHOLDER_WEBSITE_DESCRIPTION, PLACEHOLDER_WEBSITE_NAME, PLACEHOLDER_WEBSITE_NUMBER, PLACEHOLDER_WEBSITE_NUMERO, PLACEHOLDER_WEBSITE_POSTAL_CODE, PLACEHOLDER_WEBSITE_STREET, SUB_TITLE_INSTALL_PART_1, TITLE_INSTALL_ADRESS, TITLE_INSTALL_INFORMATION, TITLE_INSTALL_OTHER, TITLE_INSTALL_PART_1 } from '../../_config/lang';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Install1 = () => {

    const [nom, setNom] = useState('');
    const [desc, setDesc] = useState('');
    const [rue, setRue] = useState('');
    const [numero, setNumero] = useState('');
    const [pays, setPays] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [apropos, setApropos] = useState('');

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [alreadyDone, setalreadyDone] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get(getApiURL() + "details").then(response => {
            if(response.data !== null && response.data.amount === 0){
                setalreadyDone(false);
            } else setalreadyDone(true);
        }).catch(e => {
            setError(e.error)
        }).finally(() => {
            setLoading(false);
        })
    }, alreadyDone);

    const handleSubmit =(e) => {
        e.preventDefault();
        if(!isLoading) {
            setLoading(true);
            setError(null);
            axios.post(getApiURL() + "details/install", {
                Title: nom, 
                Description: desc,
                Rue: rue,
                Numero: numero,
                Pays: pays,
                CodePostal: codePostal,
                Apropos: apropos
            }).then(response => {
                setSuccess(response.status)
            }).catch(e => {
                setError(e.error)
            }).finally(() => {
                setLoading(false);
            })
        }
    }

    return (
        <>
        {success === 200 || alreadyDone ? 
        <>
        <div class="container mt-5 mb-5 d-flex justify-content-center color-green text-center">
            <div class="alert alert-success" role="alert">
                {ALERT_INSTALL_SUCCESS}
                <Link to="/install2" style={{marginLeft:'10px'}} type="button" class="btn btn-success">{BTN_NEXT}</Link>
            </div>
        </div>
        </> : 
        <>
        <div class="container mt-5 mb-5 d-flex justify-content-center">
            <div class="card px-1 py-4">
                <div class="card-body">
                    <form onSubmit={handleSubmit} class="form-signin">
                        <div class="text-center mb-4">
                            <h1 class="h3 mb-3 font-weight-normal">{TITLE_INSTALL_PART_1}</h1>
                            {SUB_TITLE_INSTALL_PART_1}
                        </div>

                        <div class="text-center">
                            <h5>{TITLE_INSTALL_INFORMATION}</h5>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_WEBSITE_NAME} required autofocus></input>
                            <br/>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_WEBSITE_DESCRIPTION} required></input>
                            <br/>
                        </div>

                        <div class="text-center">
                            <h5>{TITLE_INSTALL_ADRESS}</h5>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={rue} onChange={(e) => setRue(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_WEBSITE_STREET} required></input>
                            <br/>
                        </div>

                                                
                        <div class="form-label-group text-center">
                            <input value={numero} onChange={(e) => setNumero(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_WEBSITE_NUMBER} required></input>
                            <br/>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={pays} onChange={(e) => setPays(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_WEBSITE_COUNTRY} required></input>
                            <br/>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={codePostal} onChange={(e) => setCodePostal(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_WEBSITE_POSTAL_CODE} required></input>
                            <br/>
                        </div>

                        <div class="text-center">
                            <h5>{TITLE_INSTALL_OTHER}</h5>
                        </div>

                        <div class="form-label-group text-center">
                            <input value={apropos} onChange={(e) => setApropos(e.target.value)} type="text" id="inputText" class="form-control" placeholder={PLACEHOLDER_WEBSITE_ABOUT} required></input>
                            <br/>
                        </div>

                        <div class="container">
                            <div class="col text-center">
                                <button class="btn btn-primary btn-block confirm-button">{BTN_VALID}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
        }
        </>
    );
}
 
export default Install1;