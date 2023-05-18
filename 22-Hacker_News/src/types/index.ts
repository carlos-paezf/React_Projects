export type AppContextType = {
    removeStory: ( id: number ) => void;
    handleSearch: ( query: string ) => void;
    handlePage: ( order: 'inc' | 'dec' ) => void;
};


export enum ActionType {
    SET_LOADING = 'SET_LOADING',
    SET_STORIES = 'SET_STORIES',
    REMOVE_STORY = 'REMOVE_STORY',
    HANDLE_PAGE = 'HANDLE_PAGE',
    HANDLE_SEARCH = 'HANDLE_SEARCH'
}


export type HitType = {
    created_at: Date;
    title: string;
    url: string,
    author: string,
    points: number,
    story_text: unknown,
    comment_text: unknown,
    num_comments: number,
    story_id: unknown,
    story_title: unknown,
    story_url: unknown,
    parent_id: unknown,
    created_at_i: number,
    relevancy_score: number,
    _tags: string[];
    objectID: number,
    _highlightResult: {
        title: {
            value: string,
            matchLevel: string,
            matchedWords: string[];
        },
        url: {
            value: string,
            matchLevel: string,
            matchedWords: [];
        },
        author: {
            value: string,
            matchLevel: string,
            matchedWords: [];
        };
    };
};


export type StateReducerType = {
    isLoading: boolean;
    hits: HitType[];
    nbPages: number;
    page: number;
    query: string;
};


export type PayloadType = {
    id: number,
    hits: HitType[];
    nbPages: number;
    query: string;
    order: 'inc' | 'dec';
};


export type ActionReducerType = {
    type: ActionType;
    payload: Partial<PayloadType>;
};