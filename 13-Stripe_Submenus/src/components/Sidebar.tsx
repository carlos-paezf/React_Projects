import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { links } from "../data";
import { Link } from "./Link";


export const Sidebar: FC = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <div className={ isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper' }>
            <aside className="sidebar">
                <button className="close-btn" onClick={ closeSidebar }>
                    <FaTimes />
                </button>

                <div className="sidebar-links">
                    { links.map( ( link, idx ) => <Link key={ idx } { ...link } /> ) }
                </div>
            </aside>
        </div>
    );
};