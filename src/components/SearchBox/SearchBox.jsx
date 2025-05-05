import { useEffect, useState } from 'react';
import { changeFilter } from '../../redux/filtersSlice.js';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue] = useDebounce(inputValue, 200);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter(debouncedValue));
  }, [debouncedValue, dispatch]);

  return (
    <div className={css.searchField}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
