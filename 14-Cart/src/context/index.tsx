import { FC, ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { cartItems } from "../data";
import { reducer } from "../reducer";
import { ActionType, AppContextType, StateReducerType } from "../types";


const url = 'https://course-api.com/react-useReducer-cart-project';


const AppContext = createContext<AppContextType>( {
    clearCart: () => ( {} ),
    decrease: () => ( {} ),
    increase: () => ( {} ),
    remove: () => ( {} ),
    toggleAmount: () => ( {} )
} );


const initialState: StateReducerType = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0
};


const AppProvider: FC<{ children: ReactNode; }> = ( { children } ) => {
    const [ state, dispatch ] = useReducer( reducer, initialState );

    const clearCart = () => {
        dispatch( { type: ActionType.CLEAR_CART } );
    };

    const remove = ( id: number ) => {
        dispatch( { type: ActionType.REMOVE, payload: { id } } );
    };

    const increase = ( id: number ) => {
        dispatch( { type: ActionType.INCREASE, payload: { id } } );
    };

    const decrease = ( id: number ) => {
        dispatch( { type: ActionType.DECREASE, payload: { id } } );
    };

    const fetchData = async () => {
        dispatch( { type: ActionType.LOADING } );
        const response = await fetch( url );
        const cart = await response.json();
        dispatch( { type: ActionType.DISPLAY_ITEMS, payload: cart } );
    };

    const toggleAmount = ( id: number, type: string ) => {
        dispatch( { type: ActionType.TOGGLE_AMOUNT, payload: { id, type } } );
    };

    useEffect( () => {
        fetchData();
    }, [] );

    return (
        <AppContext.Provider value={ {
            ...state,
            clearCart,
            remove,
            increase,
            decrease,
            toggleAmount
        } }>
            { children }
        </AppContext.Provider>
    );
};


export const useGlobalContext = () => {
    return useContext( AppContext );
};


export { AppContext, AppProvider };
