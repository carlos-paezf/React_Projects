import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { IFollower } from "./types";
import { Follower } from "./components/Follower";


function App () {
    const { loading, error, data } = useFetch();
    const [ page, setPage ] = useState( 0 );
    const [ followers, setFollowers ] = useState<IFollower[]>( [] );

    useEffect( () => {
        if ( loading || error ) return;

        setFollowers( data[ page ] );
    }, [ loading, page ] );

    const nextPage = () => {
        setPage( ( oldPage: number ) => {
            let nextPage = oldPage + 1;

            if ( nextPage > data.length - 1 ) {
                nextPage = 0;
            }

            return nextPage;
        } );
    };

    const prevPage = () => {
        setPage( ( oldPage: number ) => {
            let prevPage = oldPage - 1;

            if ( prevPage < 0 ) {
                prevPage = data.length - 1;
            }

            return prevPage;
        } );
    };

    const handlePage = ( index: number ) => setPage( index );

    return (
        <main>
            <div className="section-title">
                <h1>{ loading ? 'loading...' : 'pagination' }</h1>
                <div className="underline"></div>
            </div>

            <section className="followers">
                <div className="container">
                    { followers.map( follower => <Follower key={ follower.id } { ...follower } /> ) }
                </div>

                {
                    !loading && (
                        <div className="btn-container">
                            <button className="prev-btn" onClick={ prevPage }>Prev</button>

                            {
                                data.map(
                                    ( _, index ) =>
                                        <button key={ index }
                                            className={ `page-btn ${ index === page && 'active-btn' }` }
                                            onClick={ () => handlePage( index ) }>
                                            { index + 1 }
                                        </button>
                                )
                            }

                            <button className="next-btn" onClick={ nextPage }>Next</button>
                        </div>
                    )
                }
            </section>
        </main>
    );
}


export default App;