import React, { useMemo, useEffect } from 'react';

import useSWR from 'swr';
import { FiChevronsLeft } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';

import Logo from '../../components/Logo';
import Pagination from '../../components/Pagination';

import usePagination from '../../hooks/usePagination';

import { fetchList } from '../../services/api';

import {
  Header,
  HeroInfo,
  Content,
  PaginationWrapper,
  Series,
  LoaderWrapper,
} from './styles';
import Loader from '../../components/Loader';

interface DetailsParams {
  heroId: string;
}

interface Series {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface HeroData {
  id: number;
  name: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
  series: {
    available: number;
  };
  stories: {
    available: number;
  };
}

const Details: React.FC = () => {
  const { heroId } = useParams<DetailsParams>();
  const { goBack } = useHistory();
  const { limit, offset, total, updateTotal, previous, next } = usePagination();

  const { data: heroResponse } = useSWR([`/characters/${heroId}`], fetchList, {
    revalidateOnFocus: false,
  });

  const { data: heroSeriesResponse, isValidating: isLoadingSeries } = useSWR(
    [`/characters/${heroId}/series`, limit, offset],
    fetchList,
    { revalidateOnFocus: false },
  );

  const hero = useMemo(() => {
    if (!heroResponse) return null;

    const { results } = heroResponse.data.data;
    return results[0] as HeroData;
  }, [heroResponse]);

  const heroSeries = useMemo(() => {
    if (!heroSeriesResponse) return [] as Series[];

    const { results } = heroSeriesResponse.data.data;
    return results as Series[];
  }, [heroSeriesResponse]);

  useEffect(() => {
    if (heroSeriesResponse) {
      const { total: newTotal } = heroSeriesResponse.data.data;
      updateTotal(newTotal);
    }
  }, [updateTotal, heroSeriesResponse]);

  return (
    <>
      <Header>
        <Logo />
        <button type="button" onClick={goBack}>
          <FiChevronsLeft />
          Voltar
        </button>
      </Header>

      {hero && (
        <HeroInfo>
          <img
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
          />
          <Content>
            <strong>{hero.name}</strong>

            <ul>
              <li>
                <strong>{hero.comics.available}</strong>
                <p>Comics</p>
              </li>

              <li>
                <strong>{hero.series.available}</strong>
                <p>Series</p>
              </li>

              <li>
                <strong>{hero.stories.available}</strong>
                <p>Stories</p>
              </li>
            </ul>
          </Content>
        </HeroInfo>
      )}

      <PaginationWrapper>
        <Pagination
          text={`${offset + 1} à ${
            offset + limit < total ? offset + limit : total
          } de ${total}`}
          onPrevious={previous}
          onNext={next}
        />
      </PaginationWrapper>

      {isLoadingSeries ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <Series>
          {heroSeries.length > 0 &&
            heroSeries.map(serie => (
              <div key={serie.id}>
                <img
                  src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                  alt={serie.title}
                />

                <div>
                  <strong>{serie.title}</strong>
                </div>
              </div>
            ))}
        </Series>
      )}
    </>
  );
};

export default Details;
