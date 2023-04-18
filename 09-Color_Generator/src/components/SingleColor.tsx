import { FC, useEffect, useState } from "react";
import rgbToHex from "../util";

type Props = {
    index: number;
    hexColor: string;
    rgb: [ a: number, b: number, c: number ];
    weight: number;
};

export const SingleColor: FC<Props> = ( { index, hexColor, rgb, weight } ) => {
    const [ alert, setAlert ] = useState( false );
    const bcg = rgb.join( ',' );
    const hex = rgbToHex( ...rgb );
    const hexValue = `#${ hexColor }`;

    useEffect( () => {
        const timeout = setTimeout( () => setAlert( false ), 3000 );

        return () => clearInterval( timeout );
    }, [ alert ] );

    return (
        <article className={ `color ${ index > 10 && 'color-light' }` }
            style={ { backgroundColor: `rgb(${ bcg })` } }
            onClick={ () => {
                setAlert( true );
                navigator.clipboard.writeText( hexValue );
            } }>

            <p className="percent-value">{ weight }%</p>
            <p className="color-value">{ hexValue }</p>

            { alert && <p className="alert">Copied to clipboard</p> }
        </article>
    );
};