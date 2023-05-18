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
    },
    {
        projectName: "Grocery Bud",
        section: "Fundamental",
        imageSrc: baseURL( '10' ),
        link: "https://grocery-bud-ferrer.netlify.app/"
    },
    {
        projectName: "Navbar",
        section: "Fundamental",
        imageSrc: baseURL( '11' ),
        link: "https://navbar-ferrer.netlify.app/"
    },
    {
        projectName: "Sidebar and Modal",
        section: "Fundamental",
        imageSrc: baseURL( '12' ),
        link: "https://sidebar-modal-ferrer.netlify.app/"
    },
    {
        projectName: "Stripe Submenus",
        section: "Fundamental",
        imageSrc: baseURL( '13' ),
        link: 'https://stripe-submenus-ferrer.netlify.app/'
    },
    {
        projectName: "Cart",
        section: "Fundamental",
        imageSrc: baseURL( '14' ),
        link: 'https://cart-ferrer.netlify.app/'
    },
    {
        projectName: "Cocktails",
        section: "Fundamental",
        imageSrc: baseURL( '15' ),
        link: 'https://cocktails-ferrer.netlify.app/'
    },
    {
        projectName: "Markdwon Preview",
        section: "Additional",
        imageSrc: baseURL( '16' ),
        link: 'https://markdown-preview-ferrer.netlify.app/'
    },
    {
        projectName: "Random Person",
        section: 'Additional',
        imageSrc: baseURL( '17' ),
        link: 'https://random-person-ferrer.netlify.app/'
    },
    {
        projectName: 'Pagination',
        section: 'Additional',
        imageSrc: baseURL( '18' ),
        link: 'https://pagination-ferrer.netlify.app/'
    },
    {
        projectName: 'Stock Photos',
        section: 'Complex',
        imageSrc: baseURL( '19' ),
        link: 'https://stock-photos-ferrer.netlify.app/'
    },
    {
        projectName: 'Dark Mode',
        section: 'Additional',
        imageSrc: baseURL( '20' ),
        link: 'https://dark-mode-ferrer.netlify.app/'
    },
    {
        projectName: 'Movie DB',
        section: 'Complex',
        imageSrc: baseURL( '21' ),
        link: 'https://movie-db-ferrer.netlify.app/'
    },
    {
        projectName: 'Hacker News',
        section: 'Complex',
        imageSrc: baseURL( '22' ),
        link: 'https://hacker-news-ferrer.netlify.app/'
    },
    {
        projectName: 'Quiz App',
        section: 'Complex',
        imageSrc: baseURL( '23' ),
        link: 'https://quiz-ferrer.netlify.app/'
    }
];