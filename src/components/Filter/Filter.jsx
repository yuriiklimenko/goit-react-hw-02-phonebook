import Input from 'components/UI/Input/Input';
import css from './Filter.module.css';

const Filter = ({ setFilter }) => {
  return (
    <div className={css.filterWrap}>
      <label className={css.label}>Find Contacts by name</label>
      <Input onChange={e => setFilter(e.target.value)} />
    </div>
  );
};

export default Filter;
