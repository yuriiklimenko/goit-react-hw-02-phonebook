import css from './ContactItem.module.css';

const ContactItem = ({ id, contact }) => {
  return (
    <li className={css.item} key={id}>
      <p className={css.name}>{contact.name}: </p>
      <p className={css.tel}>{contact.number}</p>
    </li>
  );
};

export default ContactItem;
