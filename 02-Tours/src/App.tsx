import { useEffect, useState } from 'react';
import { LoadingComponent, ToursComponent } from './components';
import { TourType } from './types';


const URL = 'https://course-api.com/react-tours-project';


function App () {
    const [ loading, setLoading ] = useState( true );
    const [ tours, setTours ] = useState<TourType[]>( [] );

    const removeTour = ( id: number ) => {
        setTours( tours.filter( ( tour ) => tour.id !== id ) );
    };

    const fetchTours = async () => {
        setLoading( true );

        try {
            const response = await fetch( URL );
            const tours = await response.json();
            setTours( tours );
        } catch ( error ) {
            console.log( error );
        } finally {
            setLoading( false );
        }
    };

    useEffect( () => {
        fetchTours();
    }, [] );

    if ( loading ) return <main><LoadingComponent /></main>;

    if ( !tours.length ) return (
        <main>
            <div className="title">
                <h2>Not tours left</h2>
                <button className="btn" onClick={ () => fetchTours() }>Refresh</button>
            </div>
        </main>
    );

    return (
        <main>
            <ToursComponent tours={ tours } removeTour={ removeTour } />
        </main>
    );
}

export default App;
