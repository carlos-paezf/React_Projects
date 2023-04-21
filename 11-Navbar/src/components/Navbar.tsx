import { FC, useEffect, useRef, useState } from "react";
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { links, social } from "../data";
import { Link } from "./Link";
import { LinkIcon } from "./LinkIcon";


export const Navbar: FC = () => {
    const [ showLinks, setShowLinks ] = useState( false );
    const linksContainerRef = useRef<HTMLDivElement>( null );
    const linksRef = useRef<HTMLUListElement>( null );

    const toggleLinks = () => {
        setShowLinks( !showLinks );
    };

    useEffect( () => {
        const linksHeight = linksRef.current!.getBoundingClientRect().height;

        if ( showLinks ) {
            linksContainerRef.current!.style.height = `${ linksHeight }px`;
        } else {
            linksContainerRef.current!.style.height = '0px';
        }
    }, [ showLinks ] );

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={ logo } alt="" className="logo" />

                    <button className="nav-toggle" onClick={ toggleLinks }><FaBars /></button>
                </div>

                <div className="links-container" ref={ linksContainerRef }>
                    <ul className="links" ref={ linksRef }>
                        {
                            links.map( ( link ) => <Link { ...link } /> )
                        }
                    </ul>
                </div>

                <ul className="social-icons">
                    {
                        social.map( ( socialIcon ) => <LinkIcon { ...socialIcon } /> )
                    }
                </ul>
            </div>
        </nav>
    );
};