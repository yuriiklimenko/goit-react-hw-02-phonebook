import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    // contacts: [],
    //name: '',
    //number: ''
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  createContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    console.log(this.state.contacts);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form create={this.createContact} />
        <ContactList contacts={this.state.contacts} id={nanoid()} />
      </>
    );
  }
}
