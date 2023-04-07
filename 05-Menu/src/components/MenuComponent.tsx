import { FC } from "react";
import { MenuType } from "../types";

type Props = {
    items: MenuType[];
};

export const MenuComponent: FC<Props> = ( { items } ) => {
    return (
        <div className="section-center">
            { items.map( menuItem => <Item item={ menuItem } /> ) }
        </div>
    );
};


export const Item: FC<{ item: MenuType; }> = ( { item } ) => {
    const { id, title, img, description, price } = item;

    return (
        <article key={ id } className="menu-item">
            <img src={ img } alt={ title } className="photo" />

            <div className="item-info">
                <header>
                    <h4>{ title }</h4>
                    <h4 className="price">${ price }</h4>
                </header>

                <p className="item-text">{ description }</p>
            </div>
        </article>
    );
};