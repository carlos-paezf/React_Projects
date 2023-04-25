import { ActionReducerType, ActionType, StateReducerType } from "../types";


export function reducer ( state: StateReducerType, action: ActionReducerType ) {
    if ( action.type === ActionType.CLEAR_CART ) {
        return {
            ...state,
            cart: []
        };
    }

    if ( action.type === ActionType.REMOVE ) {
        return {
            ...state,
            cart: state.cart.filter( cartItem => cartItem.id !== action.payload.id )
        };
    }

    if ( action.type === ActionType.INCREASE ) {
        const newCart = state.cart.map( cartItem => {
            if ( cartItem.id === action.payload.id ) {
                return {
                    ...cartItem,
                    amount: cartItem.amount + 1
                };
            }
            return cartItem;
        } );

        return {
            ...state,
            cart: newCart
        };
    }

    if ( action.type === ActionType.DECREASE ) {
        const newCart = state.cart.map( cartItem => {
            if ( cartItem.id === action.payload.id ) {
                return {
                    ...cartItem,
                    amount: cartItem.amount - 1
                };
            }
            return cartItem;
        } );

        return {
            ...state,
            cart: newCart
        };
    }

    if ( action.type === ActionType.GET_TOTALS ) {
        const { total, amount } = state.cart.reduce(
            ( cartTotal, cartItem ) => {
                const { amount, price } = cartItem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;
            },
            {
                total: 0,
                amount: 0
            }
        );

        const newTotal = parseFloat( total.toFixed( 2 ) );

        return {
            ...state,
            amount,
            total: newTotal
        };
    }

    if ( action.type === ActionType.LOADING ) {
        return {
            ...state,
            loading: true
        };
    }

    if ( action.type === ActionType.DISPLAY_ITEMS ) {
        return {
            ...state,
            loading: false,
            cart: action.payload
        };
    }

    if ( action.type === ActionType.TOGGLE_AMOUNT ) {
        const newCart = state.cart.map( cartItem => {
            if ( cartItem.id === action.payload.id ) {
                if ( action.payload.type === 'inc' ) {
                    return {
                        ...cartItem,
                        amount: cartItem.amount + 1
                    };
                }

                if ( action.payload.type === 'dec' ) {
                    return {
                        ...cartItem,
                        amount: cartItem.amount - 1
                    };
                }
            }

            return cartItem;
        } ).filter( cartItem => cartItem.amount !== 0 );

        return {
            ...state,
            cart: newCart
        };
    }

    throw new Error( 'No matching action type' );
}