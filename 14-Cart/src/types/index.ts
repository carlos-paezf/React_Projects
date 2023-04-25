export type AppContextType = {
    clearCart: () => void;
    remove: ( id: number ) => void;
    increase: ( id: number ) => void;
    decrease: ( id: number ) => void;
    toggleAmount: ( id: number, type: string ) => void;
};


export enum ActionType {
    CLEAR_CART = 'CLEAR_CART',
    DECREASE = 'DECREASE',
    DISPLAY_ITEMS = 'DISPLAY_ITEMS',
    GET_TOTALS = 'GET_TOTALS',
    INCREASE = 'INCREASE',
    LOADING = 'LOADING',
    REMOVE = 'REMOVE',
    TOGGLE_AMOUNT = 'TOGGLE_AMOUNT',
}


export type CartItemType = {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number;
};


export type StateReducerType = {
    cart: CartItemType[];
    loading: boolean;
    total: number;
    amount: number;
};


export type PayloadType = {
    id: number,
    type: 'inc' | 'dec';
};


export type ActionReducerType = {
    type: ActionType;
    payload: Partial<PayloadType>;
};