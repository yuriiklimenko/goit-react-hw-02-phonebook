import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, remove }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return (
            <ContactItem remove={remove} contact={contact} key={contact.id} />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
