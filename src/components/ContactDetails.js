import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ContactDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditMode: false,
            name: '',
            phone: ''
        }

        this.handleToggle = this.handleToggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentWillReceiveProps(nextProp) {
        this.setState({
            name: nextProp.contact.name,
            phone: nextProp.contact.phone
        })
    }

    handleToggle() {
        if (!this.props.isSelected) {
            return
        }

        if (!this.state.isEditMode) {
            // Pressed 'Edit'
        } else {
            // Pressed 'Done'
            this.handleEdit()
        }

        this.setState({
            isEditMode: !this.state.isEditMode
        })
    }

    handleChange(e) {
        let nextState = {}
        nextState[e.target.name] = e.target.value
        this.setState(nextState)
    }

    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone)
    }

    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        )
        const blank = (<div>Please select a name</div>)
        const edit = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </p>
            </div>
        )
        const view = this.state.isEditMode ? edit : details

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <button onClick={this.handleToggle}>
                    {this.state.isEditMode ? 'Done' : 'Edit'}
                </button>
                <button onClick={this.props.onRemove}>Remove</button>
            </div>
        )
    }
}

ContactDetails.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string
    }),
    isSelected: PropTypes.bool,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: '',
    },
    onRemove: () => { console.error('onRemove not defined ') },
    onEdit: () => { console.error('onEdit not defined ') }
}