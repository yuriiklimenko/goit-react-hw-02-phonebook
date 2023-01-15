import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <>
      <h2 className={css.subtitle}>Contacts</h2>
      <ul>
        {contacts.map(contact => {
          return <ContactItem contact={contact} key={contact.id} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
