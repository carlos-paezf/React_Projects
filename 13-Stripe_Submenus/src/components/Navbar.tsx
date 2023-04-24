import { FC, MouseEventHandler } from "react";
import { FaBars } from "react-icons/fa";
import logo from '../assets/images/logo.svg';
import { useGlobalContext } from "../context";


export const Navbar: FC = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu: MouseEventHandler<HTMLButtonElement> = ( event ) => {
        const target = event.target as HTMLButtonElement;
        const page = target.textContent;
        const tempBtn = target.getBoundingClientRect();
        const center = ( tempBtn.left + tempBtn.right ) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu( page, { center, bottom } );
    };

    const handleSubmenu: MouseEventHandler<HTMLElement> = ( event ) => {
        const target = event.target as HTMLElement;

        if ( !target.classList.contains( 'link-btn' ) ) {
            closeSubmenu();
        }
    };

    return (
        <nav className="nav" onMouseOver={ handleSubmenu }>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={ logo } className="nav-logo" alt="" />
                    <button className="btn toggle-btn" onClick={ openSidebar }>
                        <FaBars />
                    </button>
                </div>

                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={ displaySubmenu }>
                            products
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={ displaySubmenu }>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={ displaySubmenu }>
                            company
                        </button>
                    </li>
                </ul>

                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    );
};