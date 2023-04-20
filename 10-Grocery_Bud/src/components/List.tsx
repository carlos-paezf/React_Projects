import React from "react";
import { ItemType } from "../types";
import { FaEdit, FaTrash } from 'react-icons/fa';


type Props = {
    items: ItemType[];
    removeItem: ( id: string ) => void;
    editItem: ( id: string ) => void;
};

export const List: React.FC<Props> = ( { items, removeItem, editItem } ) => {
    return (
        <div className="grocery-list">
            {
                items.map( ( item ) => {
                    const { id, title } = item;

                    return <article className="grocery-item" key={ id }>
                        <p className="title">{ title }</p>
                        <div className="btn-container">
                            <button type="button"
                                className="edit-btn"
                                onClick={ () => editItem( id ) }>
                                <FaEdit />
                            </button>

                            <button type="button"
                                className="delete-btn"
                                onClick={ () => removeItem( id ) }>
                                <FaTrash />
                            </button>
                        </div>
                    </article>;
                } )
            }
        </div>
    );
};