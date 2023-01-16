import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = newContact => {
    for (const contact of this.state.contacts) {
      if (contact.name === newContact.name) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  removeContact = contact => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.id !== contact.id),
    });
  };

  setFilter = filterQuery => {
    if (filterQuery.length === 0) {
      this.setState({
        filter: [],
      });
      return;
    }
    this.setState({
      filter: this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterQuery.toLowerCase())
      ),
    });
  };

  getFilter = () => {
    if (this.state.filter.length === 0) {
      return this.state.contacts;
    }

    return this.state.filter;
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form create={this.createContact} />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} />
        <ContactList
          remove={this.removeContact}
          contacts={this.getFilter()}
          id={nanoid()}
        />
      </>
    );
  }
}
