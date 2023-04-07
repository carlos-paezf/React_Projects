import { FC } from "react";
import { CategoryType } from "../types";

type Props = {
    categories: CategoryType[];
    filterItems: ( category: CategoryType ) => void;
};

export const CategoriesComponent: FC<Props> = ( { categories, filterItems } ) => {
    return (
        <div className="btn-container">
            {
                categories.map( ( category, index ) => (
                    <button type="button" className="filter-btn" onClick={ () => filterItems( category ) }>
                        { category }
                    </button>
                ) )
            }
        </div>
    );
};