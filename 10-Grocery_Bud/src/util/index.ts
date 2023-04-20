export const getLocalStorage = () => {
    let list = localStorage.getItem( 'list' );

    return list ? JSON.parse( list ) : [];
};