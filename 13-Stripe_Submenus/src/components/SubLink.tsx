import { FC } from "react";
import { SubLinkType } from '../types/index';


export const SubLink: FC<SubLinkType> = ( { icon, label, url } ) => {
    return (
        <a href={ url }>{ icon } { label }</a>
    );
};