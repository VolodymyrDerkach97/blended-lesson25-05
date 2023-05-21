import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

import { useCreateContactMutation } from 'redux/todoSlice';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [addTodo] = useCreateContactMutation();
  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({ text: query });
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
