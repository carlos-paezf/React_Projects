import { FC } from "react";
import { SearchForm } from '../components/SearchForm';
import { CocktailList } from "../components/CocktailList";


export const Home: FC = () => {
    return (
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    );
};