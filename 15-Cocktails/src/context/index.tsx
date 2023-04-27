import { FC, ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import { IAppContextType, ICocktail, ICocktailsResponse, IDrinkResponse } from "../types";


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const AppContext = createContext<IAppContextType>( {
    loading: true,
    cocktails: [],
    searchTerm: 'a',
    setSearchTerm: () => ( {} )
} );


const AppProvider: FC<{ children: ReactNode; }> = ( { children } ) => {
    const [ loading, setLoading ] = useState( true );
    const [ searchTerm, setSearchTerm ] = useState( 'a' );
    const [ cocktails, setCocktails ] = useState<ICocktail[]>( [] );

    const fetchDrinks = useCallback( async () => {
        setLoading( true );

        try {
            const response = await fetch( `${ url }${ searchTerm }` );
            const data: ICocktailsResponse = await response.json();

            const { drinks } = data;

            if ( !drinks ) return setCocktails( [] );

            const newCocktails: ICocktail[] = drinks.map( ( item: IDrinkResponse ) => {
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass
                };
            } );

            return setCocktails( newCocktails );
        } catch ( error ) {
            console.log( error );
        } finally {
            setLoading( false );
        }
    }, [ searchTerm ] );

    useEffect( () => {
        fetchDrinks();
    }, [ searchTerm, fetchDrinks ] );

    return (
        <AppContext.Provider value={ {
            loading,
            cocktails,
            searchTerm,
            setSearchTerm
        } }>
            { children }
        </AppContext.Provider>
    );
};


export const useGlobalContext = () => {
    return useContext( AppContext );
};


export { AppContext, AppProvider };

