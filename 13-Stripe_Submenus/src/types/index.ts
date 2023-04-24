export type LinkType = {
    page: string;
    subLinks: SubLinkType[];
};


export type SubLinkType = {
    label: string;
    icon: JSX.Element;
    url: string;
};


export type LocationType = {
    center: number,
    bottom: number;
};

export type AppContextType = {
    isSidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    isSubmenuOpen: boolean;
    openSubmenu: ( text: string, coordinates: LocationType ) => void;
    closeSubmenu: () => void;
    page: LinkType;
    location: LocationType;
};
