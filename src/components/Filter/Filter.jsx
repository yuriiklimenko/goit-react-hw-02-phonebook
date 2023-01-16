import Input from 'components/UI/Input/Input';
import css from './Filter.module.css';

const Filter = ({ filterContacts }) => {
  return (
    <div className={css.filterWrap}>
      <label className={css.label}>Find Contacts by name</label>
      <Input onChange={filterContacts} />
    </div>
  );
};

export default Filter;
