import { ProjectType } from "../types";

const baseURL = ( projectId: string ) => `https://github.com/carlos-paezf/React_Projects/blob/main/00-React_Projects/src/assets/${ projectId }.png?raw=true`;

export const projects: ProjectType[] = [
    {
        projectName: "Birthday Buddy",
        section: "Fundamental",
        imageSrc: baseURL( '01' ),
        link: "https://birthday-reminder-ferrer.netlify.app/"
    },
];