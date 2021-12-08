import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Copyright from './Copyright/Copyright';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <>
                    <body id="page-top">
                        <Nav/>
                        <Header/>
                        {/* PARTIE RESERVEE AU SECTIONS */}
                        
                        {/* FIN DE PARTIE RESERVEE AU SECTIONS */}
                        <Footer/>
                        <Copyright/>
                    </body>
            </>
        );
    }
}
 
export default Body;