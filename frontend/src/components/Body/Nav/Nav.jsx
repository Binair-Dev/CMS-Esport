import React, { Component } from 'react';
import '../../../components/styles.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import jwt_decode from "jwt-decode";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <>
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand" href="/">{localStorage.getItem("Title")}</a>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                {/* TODO: Une bdd avec les boutons et leur redirections */}
                                {/* <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/">Accueil</a></li>
                                {localStorage.getItem("accessToken") === null && <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/login">Connexion</a></li>}
                                {localStorage.getItem("accessToken") !== null && <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/logout">Déconnexion</a></li>} */}
                                <Button id="dropdown-button-dark-example2" variant="secondary" menuVariant="dark" title="MEMBRE" className="mt-2"href="/" style={{marginRight: "10px"}}>ACCUEIL</Button>
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
}
 
export default Nav;