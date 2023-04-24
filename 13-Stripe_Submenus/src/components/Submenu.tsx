import { FC, useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { SubLink } from "./SubLink";


export const Submenu: FC = () => {
    const { isSubmenuOpen, page: { page, subLinks }, location } = useGlobalContext();
    const container = useRef<HTMLElement>( null );
    const [ columns, setColumns ] = useState( 'col-2' );

    useEffect( () => {
        setColumns( 'col-2' );
        const submenu = container.current;
        const { center, bottom } = location;
        submenu!.style.left = `${ center }px`;
        submenu!.style.top = `${ bottom }px`;
        // console.log( subLinks );
        if ( subLinks.length === 3 ) setColumns( 'col-3' );
        if ( subLinks.length > 3 ) setColumns( 'col-4' );
    }, [ page, location, subLinks ] );

    return (
        <aside className={ isSubmenuOpen ? 'submenu show' : 'submenu' } ref={ container }>
            <section>
                <h4>{ page }</h4>

                <div className={ `submenu-center ${ columns }` }>
                    { subLinks.map( ( subLink, idx ) => <SubLink key={ idx } { ...subLink } /> ) }
                </div>
            </section>
        </aside>
    );
};