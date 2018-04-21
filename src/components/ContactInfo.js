import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContactInfo extends Component {

    render() {
        return (
            <div onClick={this.props.onClick}>
                {this.props.contact.name}
            </div>
        )
    }
}

ContactInfo.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string
    }),
    onClick: PropTypes.func
}
