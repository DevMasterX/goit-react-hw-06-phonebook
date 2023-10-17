import { Input, Label } from './Filter.styled';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Search contacts..."
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={onChangeFilter}
      />
    </Label>
  );
};

export default Filter;
