import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContactInfo extends Component {

    render() {
        return (
            <div>
                {this.props.contact.name} {this.props.contact.phone}
            </div>
        )
    }
}

ContactInfo.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
    })
}
