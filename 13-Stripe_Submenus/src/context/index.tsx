import { FC, ReactNode, createContext, useContext, useState } from "react";
import { links } from "../data";
import { AppContextType, LinkType } from "../types";
import { LocationType } from '../types/index';


const AppContext = createContext<AppContextType>( {
    isSidebarOpen: false,
    openSidebar: () => ( {} ),
    closeSidebar: () => ( {} ),
    isSubmenuOpen: false,
    openSubmenu: () => ( {} ),
    closeSubmenu: () => ( {} ),
    page: { page: '', subLinks: [] },
    location: { center: 0, bottom: 0 }
} );


const AppProvider: FC<{ children: ReactNode; }> = ( { children } ) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState( false );
    const [ isSubmenuOpen, setIsSubmenuOpen ] = useState( false );
    const [ page, setPage ] = useState<LinkType>( { page: '', subLinks: [] } );
    const [ location, setLocation ] = useState<LocationType>( { center: 0, bottom: 0 } );

    const openSidebar = () => {
        setIsSidebarOpen( true );
    };

    const closeSidebar = () => setIsSidebarOpen( false );

    const openSubmenu = ( text: string, coordinates: LocationType ) => {
        const page = links.find( link => link.page === text );

        setPage( page ?? { page: '', subLinks: [] } );
        setLocation( coordinates );
        setIsSubmenuOpen( true );
    };

    const closeSubmenu = () => setIsSubmenuOpen( false );

    return (
        <AppContext.Provider value={ {
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            page,
            location
        } }>
            { children }
        </AppContext.Provider>
    );
};


export const useGlobalContext = () => {
    return useContext( AppContext );
};


export { AppContext, AppProvider };

