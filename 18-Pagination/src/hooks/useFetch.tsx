import { useEffect, useState } from "react";
import { paginate } from "../utils/paginate";
import { IFollower } from "../types";


export const useFetch = () => {
    const URL = 'https://api.github.com/users/john-smilga/followers?per_page=100';

    const [ loading, setLoading ] = useState<boolean>( true );
    const [ error, setError ] = useState<unknown>( null );
    const [ data, setData ] = useState<IFollower[][]>( [] );

    const getProducts = async () => {
        try {
            const response = await fetch( URL );
            const data = await response.json();

            setData( paginate( data ) );
        } catch ( error ) {
            setError( error );
        } finally {
            setLoading( false );
        }
    };

    useEffect( () => {
        getProducts();
    }, [] );

    return { loading, error, data };
};