import { createContext, useContext, useState } from "react";

export interface MovieType {
  adult: number;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  origin_country: string[];
  release_date: Date;
  name?: string;
  video: boolean | string;
  title?: string;
  vote_average: number;
  first_air_date?: Date;
  vote_count: number;
}

export interface QueryType {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}



interface contextTypes {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  searchData: QueryType | null;
  setSearchData: React.Dispatch<
    React.SetStateAction<QueryType | null>
  >;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const contextItem = createContext<contextTypes | null>(null);

export default function ApplicationContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState("movie");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState<QueryType | null>(
    null
  );
  return (
    <contextItem.Provider
      value={{
        searchData,
        setSearchData,
        query,
        setQuery,
        isLoading,
        setIsLoading,
        tab,
        setTab
      }}
    >
      {children}
    </contextItem.Provider>
  );
}

export function useApplicationContext() {
  const data = useContext(contextItem);
  if (!data) throw new Error("No context provided");
  return data;
}
