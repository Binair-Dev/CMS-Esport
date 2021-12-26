import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { getApiURL } from "../../_config/config";
import { BTN_ADMIN, BTN_LOG_IN, BTN_LOG_OUT } from "../../_config/lang";

function isAdmin() {
    
    if(localStorage.getItem("accessToken") !== null) {
        var decoded = jwtDecode(localStorage.getItem("accessToken"));
        let isAdministrator = decoded.isAdmin;
        return isAdministrator;
    }
    return false;
}

const Navbar = () => {
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
        
        return ( 
        <>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" style={{backgroundColor: "darkgray"}}>
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="/">{JSON.parse(localStorage.getItem("informations")).Title}</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0">
                            {buttons.sort((a, b) => (a.Ordre - b.Ordre)).map(function (i) {
                                return <li class="nav-item"><a class="nav-link" href={i.Chemin}>{i.Nom}</a></li>;})
                            }

                        </ul>
                        <Dropdown style={{marginLeft: "30px", paddingBottom: "5px"}}>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                Utilisateur
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark">
                            {localStorage.getItem("accessToken") === null && <Dropdown.Item href="/login">{BTN_LOG_IN}</Dropdown.Item>}
                            {localStorage.getItem("accessToken") !== null && <Dropdown.Item href="/logout">{BTN_LOG_OUT}</Dropdown.Item>}
                            
                            {isAdmin() === true && <><Dropdown.Divider /><Dropdown.Item href="/admin">{BTN_ADMIN}</Dropdown.Item></>}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;