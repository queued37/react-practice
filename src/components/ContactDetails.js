import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ContactDetails extends Component {
    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        )
        const blank = (<div>Please select a name</div>)

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? details : blank}
            </div>
        )
    }
}

ContactDetails.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
    }),
    isSelected: PropTypes.bool,
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: '',
    }
}