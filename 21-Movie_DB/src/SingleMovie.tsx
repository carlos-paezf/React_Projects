import { useParams, Link } from 'react-router-dom';
import { useFetch } from './hooks';
import { MovieType } from './types';


export const SingleMovie = () => {
    const { id } = useParams();
    const { isLoading, error, data: movie } = useFetch<MovieType>( `&i=${ id }`, );

    if ( isLoading || !movie ) return <div className="loading"></div>;

    if ( error.show ) return <div className="page-error">
        <h1>{ error.msg }</h1>

        <Link to='/' className="btn">
            Back to movies
        </Link>
    </div>;

    const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

    return (
        <section className="single-movie">
            <img src={ poster } alt={ title } />

            <div className="single-movie-info">
                <h2>{ title }</h2>
                <p>{ plot }</p>
                <h4>{ year }</h4>

                <Link className="btn" to="/">Back to movies</Link>
            </div>
        </section>
    );
};