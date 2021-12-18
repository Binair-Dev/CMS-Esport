import React, { Component } from 'react';
import '../../../components/styles.css'

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
                        <a class="navbar-brand" href="#page-top">{localStorage.getItem("Title")}</a>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                {/* TODO: Une bdd avec les boutons et leur redirections */}
                                {/* <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#accueil">Accueil</a></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
         );
    }
}
 
export default Nav;