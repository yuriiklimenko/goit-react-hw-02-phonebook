import Button from 'components/UI/Button/Button';
import css from './ContactItem.module.css';

const ContactItem = ({ id, contact, remove }) => {
  return (
    <li className={css.item} key={id}>
      <p className={css.name}>{contact.name}: </p>
      <p className={css.tel}>{contact.number}</p>
      <Button onClick={() => remove(contact.id)} className={css.btn}>
        Delete
      </Button>
    </li>
  );
};

export default ContactItem;
