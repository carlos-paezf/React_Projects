import { FC } from "react";
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { useGlobalContext } from "../context";
import { links, social } from "../data";
import { Link } from "./Link";
import { SocialLink } from "./SocialLink";


export const Sidebar: FC = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={ `${ isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar' }` }>
            <div className="sidebar-header">
                <img src={ logo } alt="coding addict" className="logo" />
                <button className="close-btn" onClick={ closeSidebar }>
                    <FaTimes />
                </button>
            </div>

            <ul className="links">
                { links.map( ( link, idx ) => <Link key={ idx } { ...link } /> ) }
            </ul>

            <ul className="social-icons">
                { social.map( ( link, idx ) => <SocialLink key={ idx } { ...link } /> ) }
            </ul>
        </aside>
    );
};