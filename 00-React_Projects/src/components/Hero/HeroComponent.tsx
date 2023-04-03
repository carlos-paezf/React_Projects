import { FC } from "react";
import reactLogo from '../../assets/react.svg';
import "./Hero.css";

export const HeroComponent: FC = () => {
    return (
        <div className="hero">
            <div className="description">
                <h1>React Projects</h1>
                <p>
                    Projects are the most practical way to learn any language, and <code>React</code> is no exception.
                    Solidify your knowledge of React by creating these cool projects.
                </p>
                <a href="https://github.com/carlos-paezf" className="btn" target="_blank">
                    Visit my GitHub Profile
                </a>
            </div>

            <img src={ reactLogo } alt="Hero Img" className="hero-img" />
        </div>
    );
};