import React from "react";
import { Alert } from "./components/Alert";
import { ItemType } from "./types";
import { getLocalStorage } from "./util";
import { List } from "./components/List";

function App () {
    const [ name, setName ] = React.useState( '' );
    const [ list, setList ] = React.useState<ItemType[]>( getLocalStorage() );
    const [ isEditing, setIsEditing ] = React.useState( false );
    const [ editId, setEditId ] = React.useState<string | null>( null );
    const [ alert, setAlert ] = React.useState( { show: false, msg: '', type: '' } );

    const showAlert = ( show = false, type = '', msg = '' ) => {
        setAlert( { show, type, msg } );
    };

    const clearList = () => {
        showAlert( true, 'danger', 'empty list' );
        setList( [] );
    };

    const removeItem = ( id: string ) => {
        showAlert( true, 'danger', 'item removed' );
        setList( list.filter( ( item ) => item.id !== id ) );
    };

    const editItem = ( id: string ) => {
        const specificItem = list.find( ( item ) => item.id === id );
        setIsEditing( true );
        setEditId( id );
        setName( specificItem ? specificItem.title : '' );
    };

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();

        if ( !name ) {
            showAlert( true, 'danger', 'please enter value' );
        } else if ( name && isEditing ) {
            setList( list.map( ( item ) => {
                return ( item.id === editId )
                    ? { ...item, title: name }
                    : item;
            } ) );

            setName( '' );
            setEditId( null );
            setIsEditing( false );
            showAlert( true, 'success', 'value changed' );
        } else {
            showAlert( true, 'success', 'item added to the list' );

            const newItem = { id: new Date().getTime().toString(), title: name };

            setList( [ ...list, newItem ] );
            setName( '' );
        }
    };

    React.useEffect( () => {
        localStorage.setItem( 'list', JSON.stringify( list ) );
    }, [ list ] );

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={ handleSubmit }>
                {
                    alert.show && <Alert { ...alert } removeAlert={ showAlert } list={ list } />
                }

                <h3>Grocery Bud</h3>

                <div className="form-control">
                    <input type="text" className="grocery"
                        placeholder="e.g. eggs"
                        value={ name }
                        onChange={ ( e ) => setName( e.target.value ) } />
                    <button type="submit" className="submit-btn">
                        { isEditing ? 'edit' : 'submit' }
                    </button>
                </div>
            </form>

            {
                list.length > 0 && <div className="grocery-container">
                    <List items={ list } removeItem={ removeItem } editItem={ editItem } />
                    <button className="clear-btn" onClick={ clearList }>Clear Items</button>
                </div>
            }
        </section>
    );
}

export default App;