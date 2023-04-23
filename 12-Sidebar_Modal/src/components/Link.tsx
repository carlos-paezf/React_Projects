import { FC } from "react";
import { LinkType } from "../types";


export const Link: FC<LinkType> = ( { id, url, text, icon } ) => {
    return (
        <li key={ id }>
            <a href={ url }>{ icon }{ text }</a>
        </li>
    );
};