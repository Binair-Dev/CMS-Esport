import { Component, useEffect, useState } from 'react';
import '../../../components/styles.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { getApiURL } from '../../../_config/config';

const Nav = () => {
        const [isLoading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const [buttons, setButtons] = useState([]);

        useEffect(() => {
            setLoading(true);
            setError(null);
            axios.get(getApiURL() + "buttons").then(response => {
                setButtons(response.data);
            }).catch(e => {
                setError(e.error);
            }).finally(() => {
                setLoading(false);
            })
        }, buttons);
            console.log(buttons);
            return ( 
                <>
                    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                        <div class="container">
                            <a class="navbar-brand" href="/">{localStorage.getItem("Title")}</a>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ms-auto">
                                    {buttons.sort((a, b) => (a.Ordre - b.Ordre)).map(function (i) {
                                        return <Button id="dropdown-button-dark-example2" variant="secondary" menuVariant="dark" className="mt-2"href={i.Chemin} style={{marginRight: "10px"}}>{i.Nom}</Button>;
                                    })}
                                    <DropdownButton 
                                        id="dropdown-button-dark-example2"
                                        variant="secondary"
                                        menuVariant="dark"
                                        title="MEMBRE"
                                        className="mt-2"
                                    >
                                        {localStorage.getItem("accessToken") === null && <Dropdown.Item href="/login">Connexion</Dropdown.Item>}
                                        {localStorage.getItem("accessToken") !== null && <Dropdown.Item href="/logout">Déconnexion</Dropdown.Item>}
                                        {(localStorage.getItem("accessToken") !== null && jwt_decode(localStorage.getItem("accessToken")).isAdmin) && <><Dropdown.Divider /><Dropdown.Item href="/admin">Admin</Dropdown.Item></>}
                                    </DropdownButton>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </>
             );
}
 
export default Nav;