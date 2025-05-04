import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.searchField}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};
export default SearchBox;
