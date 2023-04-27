import { FC } from "react";
import { useGlobalContext } from "../context";
import { Loading } from "./Loading";
import { Cocktail } from "./Cocktail";


export const CocktailList: FC = () => {
    const { cocktails, loading } = useGlobalContext();

    if ( loading ) return <Loading />;

    if ( cocktails.length < 1 ) return (
        <h2 className="section-title">
            no cocktails matched your search criteria
        </h2>
    );

    return (
        <section className="section">
            <h2 className="section-title">cocktails</h2>

            <div className="cocktails-center">
                { cocktails.map( item => <Cocktail key={ item.id } { ...item } /> ) }
            </div>
        </section>
    );
};