import { Dispatch, SetStateAction } from "react";


export interface IDrinkResponse {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strAlcoholic: string;
    strGlass: string;
}


export interface ICocktailsResponse {
    drinks: IDrinkResponse[];
}


export interface ICocktail {
    id: string;
    name: string;
    image: string;
    info: string;
    glass: string;
}


export interface IAppContextType {
    loading: boolean,
    cocktails: ICocktail[];
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}


export interface ICocktailDetail {
    name: string;
    image: string;
    info: string;
    category: string;
    glass: string;
    instructions: string;
    ingredients: string[];
}