import { useState } from 'react';
import { ListComponent } from './components/ListComponent';
import { peopleData } from './data';

function App () {
    const [ people, setPeople ] = useState( peopleData );

    return (
        <main>
            <section className="container">
                <h3>{ people.length } birthdays today</h3>
                <ListComponent people={ people } />
                <button onClick={ () => setPeople( [] ) }>Clear All</button>
            </section>
        </main>
    );
}

export default App;
