import React, { Component } from 'react';
import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import InputTel from 'components/UI/Input/InputTel';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  // 1) коли вели в форму ім'я клацнули відправити
  addNewContact = e => {
    e.preventDefault();

    //2) створюємо новий контакт на основі того що вели в инпут і засетилі
    const newContact = {
      ...this.state,
      id: nanoid(),
    };
    //3) закидуєм контакт в масив
    this.props.create(newContact);

    //4 чистим инпут
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form}>
        <label className={css.label}>Name</label>
        <Input
          onChange={e => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <label className={css.label}>Number</label>
        <InputTel
          onChange={e => this.setState({ number: e.target.value })}
          value={this.state.number}
        />
        <Button onClick={this.addNewContact}>Add contact</Button>
      </form>
    );
  }
}

export default Form;
