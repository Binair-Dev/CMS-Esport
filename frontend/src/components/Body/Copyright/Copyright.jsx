import React, { Component } from 'react';

class Copyright extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <div class="copyright py-4 text-center text-white">
                    <div class="container"><small>Copyright &copy; CMS Esport 2021-2022</small></div>
                </div>
            </>
        );
    }
}
 
export default Copyright;