import { useEffect, useState } from "react";
import { articles } from "./data";
import { Article } from "./Article";


const getStorageTheme = () => localStorage.getItem( 'theme' ) ?? 'light-theme';


function App () {
    const [ theme, setTheme ] = useState( getStorageTheme() );

    const toggleTheme = () => setTheme( ( theme === 'light-theme' ) ? 'dark-theme' : 'light-theme' );

    useEffect( () => {
        document.documentElement.className = theme;
        localStorage.setItem( 'theme', theme );
    }, [ theme ] );

    return (
        <main>
            <nav>
                <div className="nav-center">
                    <h1>overreacted</h1>
                    <button className="btn" onClick={ toggleTheme }>toggle</button>
                </div>
            </nav>

            <section className="articles">
                { articles.map( item => <Article key={ item.id } { ...item } /> ) }
            </section>
        </main>
    );
}


export default App;