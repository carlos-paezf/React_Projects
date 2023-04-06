import { FC, useState } from "react";
import { reviews } from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export const ReviewComponent: FC = () => {
    const [ index, setIndex ] = useState( 0 );

    const { name, job, image, text } = reviews[ index ];

    const checkNumber = ( number: number ) => {
        if ( number > reviews.length - 1 ) {
            return 0;
        }

        if ( number < 0 ) {
            return reviews.length - 1;
        }

        return number;
    };

    const nextReview = () => {
        setIndex( ( index ) => {
            let newIndex = index - 1;
            return checkNumber( newIndex );
        } );
    };

    const prevReview = () => {
        setIndex( ( index ) => {
            let newIndex = index - 1;
            return checkNumber( newIndex );
        } );
    };

    const randomReview = () => {
        let randomNumber = Math.floor( Math.random() * reviews.length );

        if ( randomNumber === index ) {
            randomNumber = index + 1;
        }

        setIndex( checkNumber( randomNumber ) );
    };

    return (
        <article className="review">
            <div className="img-container">
                <img src={ image } alt={ name } className="person-img" />

                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className="author">{ name }</h4>
            <p className="job">{ job }</p>
            <p className="info">{ text }</p>

            <div className="button-container">
                <button className="prev-btn" onClick={ prevReview }>
                    <FaChevronLeft />
                </button>

                <button className="next-btn" onClick={ nextReview }>
                    <FaChevronRight />
                </button>

            </div>

            <button className="random-btn" onClick={ randomReview }>
                Surprise Me
            </button>
        </article>
    );
};