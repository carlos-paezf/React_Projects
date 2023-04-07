export type MenuType = {
    id: number;
    title: string;
    category: CategoryType;
    price: number;
    img: string;
    description: string;
};

export type CategoryType = 'breakfast' | 'lunch' | 'shakes' | 'all';