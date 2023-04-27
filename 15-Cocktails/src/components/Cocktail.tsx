import { FC } from "react";
import { ICocktail } from "../interfaces";
import { Link } from "react-router-dom";


export const Cocktail: FC<ICocktail> = ( { id, name, image, info, glass } ) => {
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={ image } alt={ name } />
            </div>

            <div className="cocktail-footer">
                <h3>{ name }</h3>
                <h4>{ glass }</h4>
                <p>{ info }</p>

                <Link to={ `/cocktail/${ id }` } className="btn btn-primary btn-details">
                    Details
                </Link>
            </div>
        </article>
    );
};