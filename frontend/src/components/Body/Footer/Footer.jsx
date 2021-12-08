import React, { Component } from 'react';

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
                                    <h4 class="text-uppercase mb-4">Location</h4>
                                    <p class="lead mb-0">
                                        Adresse Rue/Numero
                                        <br />
                                        Pays, Code postal
                                    </p>
                                </div>
                                <div class="col-lg-4 mb-5 mb-lg-0">
                                    <h4 class="text-uppercase mb-4">Liens utiles</h4>
                                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                                </div>
                                <div class="col-lg-4">
                                    <h4 class="text-uppercase mb-4">A Propos</h4>
                                    <p class="lead mb-0">
                                        Ceci est un CMS base sur le millieu sportif/e-sportif
                                        <a href="http://cmsesport.com"> CMS Esport</a>
                                        .
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