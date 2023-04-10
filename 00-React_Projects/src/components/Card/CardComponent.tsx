import { FC, useState } from "react";
import { ProjectType } from "../../types";
import './Card.css';

export const CardComponent: FC<ProjectType> = ( { imageSrc, projectName, link } ) => {
    const [ loaded, setLoaded ] = useState( false );

    return (
        <a className="card" href={ link } target="_blank" rel="noopener noreferrer">
            <img className={ `project-image ${ !loaded && 'loading-blur' }` } src={ imageSrc } alt={ projectName } onLoad={ () => setLoaded( true ) } />
            <span className="project-link">{ projectName }</span>
        </a>
    );
};