import { FC } from "react";
import { SocialType } from "../types";


export const SocialLink: FC<SocialType> = ( { id, url, icon } ) => {
    return (
        <li key={ id }>
            <a href={ url }>{ icon }</a>
        </li>
    );
};