import React from "react";
import { ItemType } from "../types";


type Props = {
    type: string;
    msg: string;
    removeAlert: ( show?: boolean, type?: string, msg?: string ) => void;
    list: ItemType[];
};


export const Alert: React.FC<Props> = ( { type, msg, removeAlert, list } ) => {
    React.useEffect( () => {
        const timeout = setTimeout( () => removeAlert(), 3000 );

        return () => clearInterval( timeout );
    }, [ list ] );

    return <p className={ `alert alert-${ type }` }>{ msg }</p>;
};