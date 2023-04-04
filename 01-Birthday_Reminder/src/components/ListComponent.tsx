import { FC } from "react";
import { PersonType } from "../types";
import { PersonComponent } from "./PersonComponent";

type Props = {
    people: PersonType[];
};

export const ListComponent: FC<Props> = ( { people } ) => {
    return (
        <>
            { people.map( person => <PersonComponent { ...person } /> ) }
        </>
    );
};