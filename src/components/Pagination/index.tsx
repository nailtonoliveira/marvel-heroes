import React from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { Container } from './styles';

interface PaginationProps {
  text?: string;
  onPrevious: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  text,
  onPrevious,
  onNext,
}) => {
  return (
    <Container>
      {text && <span>{text}</span>}

      <button type="button" onClick={onPrevious}>
        <FiChevronLeft size={24} />
        <span>Anterior</span>
      </button>

      <button type="button" onClick={onNext}>
        <span>Proxima</span>
        <FiChevronRight size={24} />
      </button>
    </Container>
  );
};

export default Pagination;
