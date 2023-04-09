import { FC } from "react";
import { QuoteType } from "../type";
import { FaQuoteRight } from "react-icons/fa";

type Props = {
    lenPeopleQuotes: number;
    personQuote: QuoteType;
    generalIndex: number;
    quoteIndex: number;
};

export const SlideComponent: FC<Props> = ( { lenPeopleQuotes, personQuote, generalIndex, quoteIndex } ) => {
    const { id, name, image, quote, title } = personQuote;

    let position = 'nextSlide';

    if ( quoteIndex === generalIndex ) {
        position = 'activeSlide';
    }

    if ( quoteIndex === generalIndex - 1 || ( generalIndex === 0 && quoteIndex === lenPeopleQuotes - 1 ) ) {
        position = 'lastSlide';
    }

    return (
        <article className={ position } key={ id }>
            <img src={ image } alt={ name } className="person-img" />
            <h4>{ name }</h4>

            <p className="title">{ title }</p>
            <p className="text">{ quote }</p>

            <FaQuoteRight className="icon" />
        </article>
    );
};