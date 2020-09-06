import React, { useState, useEffect, FormEvent } from 'react';

import { FiSearch } from 'react-icons/fi';

import useDebounce from '../../hooks/useDebounce';

import { Container } from './styles';

interface InputSearchProps {
  onDebouncedChange?: (search: string) => void;
  onSubmit?: (search: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({
  onDebouncedChange,
  onSubmit,
}) => {
  const [value, setValue] = useState('');

  const debouncedSearch = useDebounce(value, 1000);

  useEffect(() => {
    if (onDebouncedChange) onDebouncedChange(debouncedSearch);
  }, [debouncedSearch, onDebouncedChange]);

  const handleSubmitSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (onSubmit) onSubmit(value);
  };

  return (
    <Container onSubmit={handleSubmitSearch} data-testid="form-search">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Digite parte ou o nome completo do Herói"
      />

      <button type="submit">
        <FiSearch size={32} />
        <span>Pesquisar</span>
      </button>
    </Container>
  );
};

export default InputSearch;
