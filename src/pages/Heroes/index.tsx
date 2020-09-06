import React, { useState, useEffect, useMemo } from 'react';

import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import useSWR from 'swr';

import Logo from '../../components/Logo';
import InputSearch from '../../components/InputSearch';
import Loader from '../../components/Loader';

import { fetchList } from '../../services/api';

import usePagination from '../../hooks/usePagination';

import {
  Title,
  InputSearchContent,
  List,
  Message,
  LoaderWrapper,
} from './styles';
import Pagination from '../../components/Pagination';

interface HeroData {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Heroes: React.FC = () => {
  const [search, setSearch] = useState('');

  const { limit, offset, total, updateTotal, previous, next } = usePagination();

  const { data, isValidating } = useSWR(
    ['/characters', limit, offset, search],
    fetchList,
    { revalidateOnFocus: false },
  );

  const heroes = useMemo(() => {
    if (!data) return [] as HeroData[];

    const { results } = data.data.data;

    return results as HeroData[];
  }, [data]);

  useEffect(() => {
    if (data) {
      const { total: newTotal } = data.data.data;
      updateTotal(newTotal);
    }
  }, [updateTotal, data]);

  return (
    <>
      <Logo />

      <Title>Conheça os personagens da Marvel</Title>

      <InputSearchContent>
        <InputSearch onDebouncedChange={setSearch} onSubmit={setSearch} />
      </InputSearchContent>

      <List data-testid="heroes-list-container">
        <Pagination
          text={`${offset + 1} à ${
            offset + limit < total ? offset + limit : total
          } de ${total}`}
          onPrevious={previous}
          onNext={next}
        />

        {isValidating ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <>
            {heroes.length > 0 &&
              heroes.map(hero => (
                <Link key={hero.id} to={`/details/${hero.id}`}>
                  <img
                    src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    alt={hero.name}
                  />

                  <div>
                    <strong>{hero.name}</strong>
                  </div>

                  <FiArrowRight size={24} />
                </Link>
              ))}
          </>
        )}

        {heroes.length <= 0 && !isValidating && (
          <Message>
            <span>Desculpe, nenhum Herói encontrado.</span>
          </Message>
        )}
      </List>
    </>
  );
};

export default Heroes;
