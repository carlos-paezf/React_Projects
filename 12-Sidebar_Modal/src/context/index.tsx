import {
    FC, ReactNode, createContext, useContext, useState
} from "react";


type AppContextType = {
    isSidebarOpen: boolean;
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;
};


const AppContext = createContext<AppContextType>( {
    isSidebarOpen: false,
    isModalOpen: false,
    openModal: () => ( {} ),
    closeModal: () => ( {} ),
    openSidebar: () => ( {} ),
    closeSidebar: () => ( {} )
} );


const AppProvider: FC<{ children: ReactNode; }> = ( { children } ) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState( false );
    const [ isModalOpen, setIsModalOpen ] = useState( false );

    const openSidebar = () => {
        console.log( 'open sidebar' );
        setIsSidebarOpen( true );
    };

    const closeSidebar = () => setIsSidebarOpen( false );

    const openModal = () => setIsModalOpen( true );

    const closeModal = () => setIsModalOpen( false );

    return (
        <AppContext.Provider value={ {
            isSidebarOpen,
            isModalOpen,
            openModal,
            closeModal,
            openSidebar,
            closeSidebar
        } }>
            { children }
        </AppContext.Provider>
    );
};


export const useGlobalContext = () => {
    return useContext( AppContext );
};


export { AppContext, AppProvider };