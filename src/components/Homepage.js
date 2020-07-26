import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Homepage extends Component {
    static propTypes = {
        header: PropTypes.string.isRequired
    }

    render() {
        return (
            <h1>
                {this.props.header}
            </h1>
        )
    }
}
