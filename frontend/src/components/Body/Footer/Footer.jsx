import React, { Component } from 'react';
import { FOOTER_ABOUT, FOOTER_LOCATION, FOOTER_USEFULL_LINKS, LOCATION } from '../../../_config/lang';
import '../../../components/styles.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                    <footer class="footer text-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 mb-5 mb-lg-0">
                                    <h4 class="text-uppercase mb-4">{FOOTER_LOCATION}</h4>
                                    <p class="lead mb-0">
                                        {localStorage.getItem("Title")}
                                        <br />
                                        {localStorage.getItem("Rue")} {localStorage.getItem("Numero")}
                                        <br />
                                        {localStorage.getItem("CodePostal")} {localStorage.getItem("Pays")}
                                    </p>
                                </div>
                                <div class="col-lg-4 mb-5 mb-lg-0">
                                    <h4 class="text-uppercase mb-4">{FOOTER_USEFULL_LINKS}</h4>
                                    {/* TODO: Une bdd avec les liens utiles */}
                                </div>
                                <div class="col-lg-4">
                                    <h4 class="text-uppercase mb-4">{FOOTER_ABOUT}</h4>
                                    <p class="lead mb-0">
                                        {localStorage.getItem("Apropos")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
            </>
        );
    }
}
 
export default Footer;