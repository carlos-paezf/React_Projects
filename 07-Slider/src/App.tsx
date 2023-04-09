import { useEffect, useState } from "react";
import { ControlsComponent } from './components/ControlsComponent';
import { SlideComponent } from "./components/SlideComponent";
import { quotes } from "./data";
import { QuoteType } from "./type";

function App () {
    const [ peopleQuotes, setPeopleQuotes ] = useState<QuoteType[]>( quotes );
    const [ index, setIndex ] = useState( 0 );

    useEffect( () => {
        const lastIndex = peopleQuotes.length - 1;

        if ( index < 0 ) setIndex( lastIndex );

        if ( index > lastIndex ) setIndex( 0 );
    }, [ index, peopleQuotes ] );

    useEffect( () => {
        let slider = setInterval( () => {
            setIndex( index + 1 );
        }, 5000 );

        return () => clearInterval( slider );
    }, [ index ] );

    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>

            <div className="section-center">
                {
                    peopleQuotes.map( ( personQuote, idx ) => (
                        <SlideComponent key={ idx }
                            lenPeopleQuotes={ peopleQuotes.length }
                            personQuote={ personQuote }
                            generalIndex={ index }
                            quoteIndex={ idx } />
                    ) )
                }

                <ControlsComponent index={ index } setIndex={ setIndex } />
            </div>
        </section>
    );
}

export default App;