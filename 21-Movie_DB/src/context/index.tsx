import { FC, ReactNode, createContext, useContext, useState } from "react";
import { AppContextType, MovieType } from "../types";
import { useFetch } from "../hooks";


const AppContext = createContext<AppContextType>( {
    isLoading: true,
    error: {
        show: false,
        msg: ''
    },
    movies: [],
    query: '',
    setQuery: () => null
} );


const AppProvider: FC<{ children: ReactNode; }> = ( { children } ) => {
    const [ query, setQuery ] = useState( 'batman' );
    const { isLoading, error, data: movies } = useFetch<MovieType[]>( `&s=${ query }` );

    return (
        <AppContext.Provider value={ { isLoading, error, movies: movies ?? [], query, setQuery } }>
            { children }
        </AppContext.Provider>
    );
};


export const useGlobalContext = () => {
    return useContext( AppContext );
};


export { AppContext, AppProvider };