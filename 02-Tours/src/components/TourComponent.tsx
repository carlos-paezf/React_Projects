import { FC, useState } from "react";
import { TourType } from "../types";

type Props = {
    tour: TourType;
    removeTour: ( id: number ) => void;
};

export const TourComponent: FC<Props> = ( { tour: { id, image, info, name, price }, removeTour } ) => {
    const [ readMore, setReadMode ] = useState( false );

    return (
        <article className="single-tour">
            <img src={ image } alt={ name } />

            <footer>
                <div className="tour-info">
                    <h4>{ name }</h4>
                    <h4 className="tour-price">${ price }</h4>
                </div>

                <p>
                    { readMore ? info : `${ info.substring( 0, 200 ) }...` }
                    <button onClick={ () => setReadMode( !readMore ) }>{ readMore ? 'show less' : ' read more' }</button>
                </p>

                <button className="delete-btn" onClick={ () => removeTour( id ) }>Not interested</button>
            </footer>
        </article>
    );
};