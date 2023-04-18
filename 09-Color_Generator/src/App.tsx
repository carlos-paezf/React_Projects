import { FormEvent, useState } from "react";
import Values from "values.js";
import { SingleColor } from "./components/SingleColor";

function App () {
    const [ color, setColor ] = useState<string>( '' );
    const [ error, setError ] = useState<boolean>( false );
    const [ list, setList ] = useState( new Values( '#f15025' ).all( 10 ) );

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();
        try {
            let colors = new Values( color ).all( 10 );
            setList( colors );
        } catch ( error ) {
            setError( true );
            console.log( error );
        }
    };

    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={ handleSubmit }>
                    <input type="text" value={ color }
                        className={ `${ error && 'error' }` }
                        placeholder="#f15025"
                        onChange={ ( e ) => setColor( e.target.value ) } />

                    <button type="submit" className="btn">Submit</button>
                </form>
            </section>

            <section className="colors">
                {
                    list.map( ( colorElm, idx ) => <SingleColor key={ idx }
                        index={ idx }
                        hexColor={ colorElm.hex }
                        { ...colorElm } /> )
                }
            </section>
        </>
    );
}

export default App;