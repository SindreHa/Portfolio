import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/homepage.css'

import portrait from '../resources/portrait.jpg'

export default class Homepage extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div id="homepage">
                <header>
                    <h1>
                        Hei,
                    </h1>
                    <h1>
                        mitt navn er Sindre.
                    </h1>
                    <p>Webutvikler / Frontend / React</p>
                </header>
                <div id="portrait">
                    <img src={portrait} alt="Portrait"/>
                </div>
                
            </div>
        )
    }
}
