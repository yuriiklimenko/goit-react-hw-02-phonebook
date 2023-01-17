import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, remove }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return (
            <ContactItem remove={remove} contact={contact} key={contact.name} />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
};
