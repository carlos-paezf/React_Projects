import { FC } from "react";
import { LinkType } from "../types";
import { SubLink } from "./SubLink";

export const Link: FC<LinkType> = ( { page, subLinks } ) => {
    return (
        <article>
            <h4>{ page }</h4>
            <div className="sidebar-sublinks">
                {
                    subLinks.map( ( subLink, idx ) => <SubLink key={ idx } { ...subLink } /> )
                }
            </div>
        </article>
    );
};