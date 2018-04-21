import React, { Component } from 'react'
import ContactInfo from './ContactInfo'
import ContactDetails from './ContactDetails'
import ContactCreate from './ContactCreate'
import update from 'immutability-helper'

export default class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedKey: null,
            keyword: '',
            contacts: [
                {name: 'Alice',   phone: '010-0000-0000'},
                {name: 'Bob',     phone: '010-0000-0001'},
                {name: 'Charlie', phone: '010-0000-0002'},
                {name: 'David',   phone: '010-0000-0003'},
            ]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.handleCreate = this.handleCreate.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    handleClick(key) {
        this.setState({selectedKey: key})
    }

    handleCreate(contact) {
        this.setState({
            contacts: update(this.state.contacts, {$push: [contact]})
        })
    }

    handleRemove() {
        this.setState({
            contacts: update(this.state.contacts, {$splice: [[this.state.selectedKey, 1]]}),
            selectedKey: -1
        })
    }

    handleEdit(name, phone) {
        this.setState({
            contacts: update(this.state.contacts, {
                [this.state.selectedKey]: {
                    name: {$set: name},
                    phone: {$set: phone}
                }
            })
        })
    }


    render() {
        const mapToContactInfo = (data) => {
            data.sort()
            data = data.filter((contact) => {
                return contact.name.toLowerCase()
                    .indexOf(this.state.keyword) > -1
            })
            return data.map((contact, i) => (
                <ContactInfo
                    contact={contact}
                    key={i}
                    onClick={() => {this.handleClick(i)}}
                />
            ))
        }

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>
                    {mapToContactInfo(this.state.contacts)}
                </div>
                <ContactDetails
                    isSelected={this.state.selectedKey != null}
                    contact={this.state.contacts[this.state.selectedKey]}
                />
                <ContactCreate
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }

}
