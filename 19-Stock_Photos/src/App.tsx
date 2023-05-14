import { FormEvent, useEffect, useRef, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { Photo } from "./Photos";
import { PhotoType } from "./types";


const clientID = `?client_id=${ import.meta.env.VITE_REACT_APP_ACCESS_KEY }`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;


function App () {
    const [ loading, setLoading ] = useState( false );
    const [ photos, setPhotos ] = useState<PhotoType[]>( [] );
    const [ page, setPage ] = useState( 1 );
    const [ query, setQuery ] = useState( '' );
    const [ newImages, setNewImages ] = useState( false );

    const mounted = useRef( false );

    const fetchImages = async () => {
        setLoading( true );

        const urlPage = `&page=${ page }`;
        const urlQuery = `&query=${ query }`;

        const url = query
            ? `${ searchUrl }${ clientID }${ urlPage }${ urlQuery }`
            : `${ mainUrl }${ clientID }${ urlPage }`;

        try {
            const response = await fetch( url );
            const data = await response.json();

            setPhotos( ( oldPhotos ) => {
                if ( query && page === 1 ) return data.results;
                else if ( query ) return [ ...oldPhotos, ...data.results ];
                else return [ ...oldPhotos, ...data ];
            } );

            setNewImages( false );
            setLoading( false );
        } catch ( error ) {
            setNewImages( false );
            setLoading( false );
        }
    };

    useEffect( () => {
        fetchImages();
    }, [ page ] );

    useEffect( () => {
        if ( !mounted.current ) {
            mounted.current = true;
            return;
        }

        if ( !newImages || loading ) return;

        setPage( ( oldPage ) => oldPage + 1 );
    }, [ newImages ] );

    const event = () => {
        if ( window.innerHeight + window.scrollY >= document.body.scrollHeight - 2 ) {
            setNewImages( true );
        }
    };

    useEffect( () => {
        window.addEventListener( 'scroll', event );

        return () => window.removeEventListener( 'scroll', event );
    }, [] );

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();

        if ( !query ) return;
        if ( page === 1 ) fetchImages();

        setPage( 1 );
    };

    return (
        <main>
            <section className="search">
                <form className="search-form">
                    <input type="text"
                        value={ query }
                        placeholder="search"
                        onChange={ ( e ) => setQuery( e.target.value ) }
                        className="form-input" />

                    <button type="submit" className="submit-btn" onClick={ handleSubmit }>
                        <FaSearch />
                    </button>
                </form>
            </section>

            <section className="photos">
                <div className="photos-center">
                    { photos.map( ( image, idx ) => <Photo key={ idx } { ...image } /> ) }
                </div>

                { loading && <h2 className="loading">Loading...</h2> }
            </section>
        </main>
    );
}


export default App;