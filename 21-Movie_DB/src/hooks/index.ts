import { useEffect, useState } from "react";


const API_ENDPOINT = `https://www.omdbapi.com/?apiKey=${ import.meta.env.VITE_MOVIE_API_KEY }`;


export function useFetch<S> ( urlParams: string ) {
    const [ isLoading, setIsLoading ] = useState( true );
    const [ error, setError ] = useState( { show: false, msg: '' } );
    const [ data, setData ] = useState<S>();

    const fetchMovies = async ( url: string ) => {
        setIsLoading( true );

        try {
            const response = await fetch( url );
            const data = await response.json();

            if ( data.Response === 'True' ) {
                setData( data.Search || data );
                setError( { show: false, msg: '' } );
            } else {
                setError( { show: true, msg: data.Error } );
            }
        } catch ( error ) {
            console.log( error );
        } finally {
            setIsLoading( false );
        }
    };

    useEffect( () => {
        fetchMovies( `${ API_ENDPOINT }${ urlParams }` );
    }, [ urlParams ] );

    return { isLoading, error, data };
}