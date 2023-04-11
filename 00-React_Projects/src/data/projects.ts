import { ProjectType } from "../types";

const baseURL = ( projectId: string ) => `https://github.com/carlos-paezf/React_Projects/blob/main/00-React_Projects/src/assets/${ projectId }.png?raw=true`;

export const projects: ProjectType[] = [
    {
        projectName: "Birthday Buddy",
        section: "Fundamental",
        imageSrc: baseURL( '01' ),
        link: "https://birthday-reminder-ferrer.netlify.app/"
    },
    {
        projectName: "Tours",
        section: "Fundamental",
        imageSrc: baseURL( '02' ),
        link: "https://tours-ferrer.netlify.app/"
    },
    {
        projectName: "Reviews",
        section: "Fundamental",
        imageSrc: baseURL( '03' ),
        link: "https://reviews-ferrer.netlify.app/"
    },
    {
        projectName: "Accordion",
        section: "Fundamental",
        imageSrc: baseURL( '04' ),
        link: "https://accordion-ferrer.netlify.app/"
    },
    {
        projectName: "Menu",
        section: "Fundamental",
        imageSrc: baseURL( '05' ),
        link: "https://menu-ferrer.netlify.app/"
    },
    {
        projectName: "Tabs",
        section: "Fundamental",
        imageSrc: baseURL( '06' ),
        link: "https://tabs-ferrer.netlify.app/"
    },
    {
        projectName: "Slider",
        section: "Fundamental",
        imageSrc: baseURL( '07' ),
        link: "https://slider-ferrer.netlify.app/"
    },
    {
        projectName: "Lorem Ipsum Generator",
        section: "Fundamental",
        imageSrc: baseURL( '08' ),
        link: "https://lorem-ipsum-ferrer.netlify.app/"
    },
    {
        projectName: "Color Generator",
        section: "Fundamental",
        imageSrc: baseURL( '09' ),
        link: "https://color-generator-ferrer.netlify.app/"
    }
];