import { useState } from "react";
import { CategoriesComponent } from "./components/CategoriesComponent";
import { MenuComponent } from "./components/MenuComponent";
import { items } from "./data";
import { CategoryType, MenuType } from "./types";

const allCategories: CategoryType[] = [ 'all', ...new Set( items.map( item => item.category ) ) ];

function App () {
    const [ menuItems, setMenuItems ] = useState<MenuType[]>( items );
    const [ categories, setCategories ] = useState<CategoryType[]>( allCategories );

    const filterItems = ( category: CategoryType ) => {
        if ( category === 'all' ) {
            setMenuItems( items );
            return;
        }

        const newItems = items.filter( item => item.category === category );
        setMenuItems( newItems );
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our menu</h2>
                    <div className="underline"></div>
                </div>

                <CategoriesComponent categories={ categories } filterItems={ filterItems } />
                <MenuComponent items={ menuItems } />
            </section>
        </main>
    );
}

export default App;
