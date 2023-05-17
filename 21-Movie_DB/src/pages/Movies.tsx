import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { MovieType } from "../types";


const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';


export const Movies = () => {
    const { movies, isLoading } = useGlobalContext();

    if ( isLoading ) return <div className="loading"></div>;

    return (
        <section className="movies">
            {
                movies.map( ( movie: MovieType ) => {
                    const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

                    return (
                        <Link to={ `/movies/${ id }` } key={ id } className="movie">
                            <article>
                                <img src={ poster === 'N/A' ? url : poster } alt={ title } />
                                <div className="movie-info">
                                    <h4 className="title">{ title }</h4>
                                    <p>{ year }</p>
                                </div>
                            </article>
                        </Link>
                    );
                } )
            }
        </section>
    );
};