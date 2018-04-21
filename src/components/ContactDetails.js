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
                <button onClick={this.props.onRemove}>Remove</button>
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
    onRemove: PropTypes.func,
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: '',
    },
    onRemove: () => { console.error('onRemove not defined ') }
}