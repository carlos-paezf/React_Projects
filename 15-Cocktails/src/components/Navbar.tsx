import { FC } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';


export const Navbar: FC = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <img src={ logo } alt="cocktail db logo" className="logo" />
                </Link>

                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};