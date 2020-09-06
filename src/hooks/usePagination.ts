import { useState } from 'react';

interface PaginationProps {
  defaultLimit?: number;
}

interface PaginationData {
  limit: number;
  offset: number;
  total: number;
  updateTotal: (total: number) => void;
  previous: () => void;
  next: () => void;
}

function usePagination({ defaultLimit }: PaginationProps = {}): PaginationData {
  const [limit] = useState(defaultLimit || 10);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const updateTotal = (newTotal: number): void => {
    setTotal(newTotal);
  };

  const previous = (): void => {
    if (offset > 0) {
      setOffset(prev => prev - limit);
    }
  };

  const next = (): void => {
    if (offset + limit < total) {
      setOffset(prev => prev + limit);
    }
  };

  return { limit, offset, total, updateTotal, previous, next };
}

export default usePagination;
