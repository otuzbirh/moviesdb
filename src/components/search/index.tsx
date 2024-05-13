import { useEffect, memo, useCallback, ChangeEvent } from 'react';
import s from './Search.module.scss';
import request from './../../api/requests';
import { useApplicationContext } from './../../context/Context';
import { debounce } from 'lodash';

const SearchComponent = () => {
  const {
    query,
    setQuery,
    setSearchData,
    tab,
    setIsLoading
  } = useApplicationContext();

  const fetchSearchedItemsDebounced = useCallback(
    debounce(async (query: string) => {
      setIsLoading(true);
      try {
        const data = await request().search(tab, query);
        setSearchData(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }, 1000),
    [tab]
  );

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      fetchSearchedItemsDebounced(value);
    },
    [fetchSearchedItemsDebounced, setQuery]
  );

  useEffect(() => {
    if (query.length < 3) return setSearchData(null);
  }, [query, setSearchData]);

  return (
    <div className={s.search}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M9.75048 4.87523C9.75048 5.95106 9.40124 6.94486 8.81293 7.75115L11.7803 10.7208C12.0732 11.0138 12.0732 11.4896 11.7803 11.7826C11.4873 12.0756 11.0115 12.0756 10.7185 11.7826L7.75116 8.81292C6.94487 9.40357 5.95107 9.75046 4.87524 9.75046C2.18214 9.75046 0 7.56833 0 4.87523C0 2.18214 2.18214 0 4.87524 0C7.56834 0 9.75048 2.18214 9.75048 4.87523ZM4.87524 8.25039C6.73861 8.25039 8.2504 6.7386 8.2504 4.87523C8.2504 3.01186 6.73861 1.50007 4.87524 1.50007C3.01187 1.50007 1.50007 3.01186 1.50007 4.87523C1.50007 6.7386 3.01187 8.25039 4.87524 8.25039Z" fill="black"/>
      </svg>
      <input type='text' placeholder='Search...' value={query} onChange={handleSearchChange} />
    </div>
  );
};

export default memo(SearchComponent);
