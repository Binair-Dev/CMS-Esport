import React, { Component } from 'react';
import { COPYRIGHT } from '../../../_config/lang';
import '../../../components/styles.css'

class Copyright extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <div class="copyright py-4 text-center text-white">
                    <div class="container"><small>{COPYRIGHT} &copy; {localStorage.getItem("Title")} {new Date().getFullYear() !== 2021 ? "2021-" + new Date().getFullYear() : new Date().getFullYear()}</small></div>
                </div>
            </>
        );
    }
}
 
export default Copyright;