import { FC, FormEvent, useEffect, useRef } from "react";
import { useGlobalContext } from "../context";


export const SearchForm: FC = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef<HTMLInputElement>( null );

    useEffect( () => {
        searchValue.current!.focus();
    }, [] );

    const searchCocktail = () => {
        setSearchTerm( searchValue.current!.value );
    };

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();
    };

    return (
        <section className="section search">
            <form className="search-form" onSubmit={ handleSubmit }>
                <div className="form-control">
                    <label htmlFor="name">Search your favorite cocktail</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        ref={ searchValue }
                        onChange={ searchCocktail } />
                </div>
            </form>
        </section>
    );
};