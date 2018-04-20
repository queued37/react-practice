import React, { Component } from 'react'
import ContactInfo from './ContactInfo'

export default class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            contacts: [
                {name: 'Alice',   phone: '010-0000-0000'},
                {name: 'Bob',     phone: '010-0000-0001'},
                {name: 'Charlie', phone: '010-0000-0002'},
                {name: 'David',   phone: '010-0000-0003'},
            ]
        }
    }

    render() {
        const mapToContactInfo = (data) => (
            data.map((contact, i) => (
                <ContactInfo contact={contact} key={i}/>
            ))
        )

        return (
            <div>
                <h1>Contacts</h1>
                <div>
                    {mapToContactInfo(this.state.contacts)}
                </div>
            </div>
        )
    }

}
