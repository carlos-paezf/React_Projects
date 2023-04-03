import { FC } from "react";
import { ProjectType } from "../../types";
import { CardComponent } from "../Card/CardComponent";
import { TitleComponent } from "../Title/TitleComponent";
import './CardGrid.css';

type Props = {
    title: string;
    projects: ProjectType[];
};

export const CardGridComponent: FC<Props> = ( { title, projects } ) => {
    return (
        <>
            <TitleComponent title={ title } />
            <div className="cards-container">
                { projects.map( project => <CardComponent { ...project } /> ) }
            </div>
        </>
    );
};