import './App.css';
import { CardGridComponent } from './components/CardGrid/CardGridComponent';
import { HeroComponent } from './components/Hero/HeroComponent';
import { projects } from './data/projects';

function App () {
    const fundamentalProjects = projects.filter( project => project.section === 'Fundamental' );
    const complexProjects = projects.filter( project => project.section === 'Complex' );
    const additionalProjects = projects.filter( project => project.section === 'Additional' );

    return (
        <>
            <HeroComponent />

            <div className="projects">
                <CardGridComponent title='Fundamental Projects' projects={ fundamentalProjects } />
                <CardGridComponent title='Complex Projects' projects={ complexProjects } />
                <CardGridComponent title='Additional Projects' projects={ additionalProjects } />
            </div>
        </>
    );
}

export default App;
