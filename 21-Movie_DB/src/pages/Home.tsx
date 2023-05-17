import { SearchForm } from '../components/SearchForm';
import { Movies } from './Movies';


export const Home = () => {
    return (
        <main>
            <SearchForm />
            <Movies />
        </main>
    );
};