import { ActionReducerType, ActionType, StateReducerType } from "../types";


export const reducer = ( state: StateReducerType, action: ActionReducerType ): StateReducerType => {
    switch ( action.type ) {
        case ActionType.SET_LOADING:
            return { ...state, isLoading: true };

        case ActionType.SET_STORIES:
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits!,
                nbPages: action.payload.nbPages!
            };

        case ActionType.REMOVE_STORY:
            return {
                ...state,
                hits: state.hits.filter( ( story ) => story.objectID != action.payload.id )
            };

        case ActionType.HANDLE_SEARCH:
            return {
                ...state,
                query: action.payload.query!,
                page: 0
            };

        case ActionType.HANDLE_PAGE:
            if ( action.payload.order === 'inc' ) {
                let nextPage = state.page + 1;

                if ( nextPage > state.nbPages - 1 ) {
                    nextPage = 0;
                }

                return { ...state, page: nextPage };
            }

            if ( action.payload.order === 'dec' ) {
                let prevPage = state.page - 1;

                if ( prevPage < 0 ) {
                    prevPage = state.nbPages - 1;
                }

                return { ...state, page: prevPage };
            }

        default: throw new Error( `No matching "${ action.type }" action type` );
    }
};