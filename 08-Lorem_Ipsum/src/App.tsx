import { FormEvent, useState } from "react";
import { textBase } from '../data/index';

function App () {
    const [ count, setCount ] = useState<number>( 0 );
    const [ text, setText ] = useState<string[]>( [] );

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();

        let amount = count;

        if ( amount <= 0 ) { amount = 1; }

        if ( amount > 8 ) { amount = 8; }

        setText( textBase.slice( 0, amount ) );
    };

    return (
        <section className="section-center">
            <h3>Tired of boring lorem ipsum?</h3>

            <form className="lorem-form" onSubmit={ handleSubmit }>
                <label htmlFor="amount">Paragraphs:</label>
                <input type="number" id="number"
                    min={ 0 } max={ 8 }
                    name="amount" value={ count }
                    onChange={ ( e ) => setCount( parseInt( e.target.value ) ) } />
            </form>

            <article className="lorem-text">
                {
                    text.map( ( item, index ) => <p key={ index }>{ item }</p> )
                }
            </article>
        </section>
    );
}

export default App;