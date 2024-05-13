import { useMemo } from 'react';
import Card from '../card';
import useFetchData from './../../hooks/useFetch';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './index.module.scss';
import { useApplicationContext } from './../../context/Context';
import request from './../../api/requests';

interface Movie {
  title: string;
  backdrop_path: string;
}

const ItemsList: React.FC = () => {
  const { tab, searchData, isLoading } = useApplicationContext();

  const { data: apiData, loading: fetchLoading } = useFetchData<Movie[]>(
    () => request().topRated(tab).then(response => response.data.results),
    [tab]
  );

  const searchResults = useMemo(() => {
    return searchData?.results || [];
  }, [searchData]);

  return (
    <>
      {isLoading || fetchLoading ? (
        <div className={s.skeleton}>
          {[...Array(10)].map((_, index) => (
            <Skeleton count={2} height={150} key={index} />
          ))}
        </div>
      ) : (
        <div className={s.list}>
          {searchResults.length > 0 ? (
            searchResults.map((item, index) => (
              <Card
                key={index}
                title={item.name || item.title}
                path={item.backdrop_path}
                type={tab}
                id={item.id}
              />
            ))
          ) : (
            apiData?.slice(0, 10).map((item, index) => (
              <Card
                key={index}
                title={item.title || item.name}
                path={item.backdrop_path}
                type={tab}
                id={item.id}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default ItemsList;
