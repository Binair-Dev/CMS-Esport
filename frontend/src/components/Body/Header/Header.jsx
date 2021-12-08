import React, { Component } from 'react';
import avatar from "../../../assets/img/avataaars.svg";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <img class="masthead-avatar mb-5" src={avatar} alt="..." />
                        <h1 class="masthead-heading text-uppercase mb-0">CMS Esport Header</h1>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <p class="masthead-subheading font-weight-light mb-0">CMS Complet - Esport - Sport</p>
                    </div>
                </header>
            </>
        );
    }
}
 
export default Header;