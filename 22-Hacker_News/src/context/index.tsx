import { FC, ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { ActionType, AppContextType, StateReducerType } from "../types";
import { reducer } from "../reducer";


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';


const initialState: StateReducerType & AppContextType = {
    isLoading: true,
    hits: [],
    query: 'react',
    page: 0,
    nbPages: 0,
    removeStory: () => null,
    handleSearch: () => null,
    handlePage: () => null
};


const AppContext = createContext( initialState );


const AppProvider: FC<{ children: ReactNode; }> = ( { children } ) => {
    const [ state, dispatch ] = useReducer( reducer, initialState );

    const fetchStories = async ( url: string ) => {
        dispatch( {
            type: ActionType.SET_LOADING,
            payload: {}
        } );

        try {
            const data = await ( await fetch( url ) ).json();

            dispatch( {
                type: ActionType.SET_STORIES,
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            } );
        } catch ( error ) {
            console.log( error );
        }
    };

    const removeStory = ( id: number ) => {
        dispatch( {
            type: ActionType.REMOVE_STORY,
            payload: { id }
        } );
    };

    const handleSearch = ( query: string ) => {
        dispatch( {
            type: ActionType.HANDLE_SEARCH,
            payload: { query }
        } );
    };

    const handlePage = ( order: 'inc' | 'dec' ) => {
        dispatch( {
            type: ActionType.HANDLE_PAGE,
            payload: { order }
        } );
    };

    useEffect( () => {
        fetchStories( `${ API_ENDPOINT }query=${ state.query }&page=${ state.page }` );
    }, [ state.query, state.page ] );

    return (
        <AppContext.Provider value={ {
            ...state, removeStory, handleSearch, handlePage
        } }>
            { children }
        </AppContext.Provider>
    );
};


export const useGlobalContext = () => useContext( AppContext );


export { AppContext, AppProvider };