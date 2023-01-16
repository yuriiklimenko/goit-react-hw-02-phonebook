import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return <ContactItem contact={contact} key={contact.id} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
