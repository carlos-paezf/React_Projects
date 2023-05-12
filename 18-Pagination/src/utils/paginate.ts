import { IFollower } from "../types";


export const paginate = ( followers: IFollower[] ): IFollower[][] => {
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil( followers.length / itemsPerPage );

    const newFollowers = Array.from( { length: numberOfPages }, ( _, index ) => {
        const start = index * itemsPerPage;
        return followers.slice( start, start + itemsPerPage );
    } );

    return newFollowers;
};