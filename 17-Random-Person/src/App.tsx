import { MouseEventHandler, useEffect, useState } from "react";
import { FaCalendarTimes, FaEnvelopeOpen, FaLock, FaMap, FaPhone, FaUser } from 'react-icons/fa';
import { IPerson } from "./types";


const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';


function App () {
    const [ loading, setLoading ] = useState( true );
    const [ person, setPerson ] = useState<IPerson>();
    const [ value, setValue ] = useState( 'random person' );
    const [ title, setTitle ] = useState( 'name' );

    const getPerson = async () => {
        setLoading( true );

        const response = await fetch( url );
        const data = await response.json();
        const person = data.results[ 0 ];

        const { phone, email, dob: { age } } = person;
        const { large: image } = person.picture;
        const { password } = person.login;
        const { first, last } = person.name;
        const { street: { number, name } } = person.location;

        const newPerson = {
            image, phone, email, password, age,
            street: `${ number } ${ name }`,
            name: `${ first }, ${ last }`
        };

        setPerson( newPerson );
        setLoading( false );
        setTitle( 'name' );
        setValue( newPerson.name );
    };

    useEffect( () => {
        getPerson();
    }, [] );

    const handleValue: MouseEventHandler<HTMLButtonElement> = ( event ) => {
        if ( event.target.classList.contains( 'icon' ) ) {
            const newValue = event.target.dataset.label;
            setTitle( newValue );
            setValue( person[ newValue ] );
        }
    };

    return (
        <main>
            <div className="block bcg-black"></div>
            <div className="block">
                <div className="container">
                    <img src={ ( person && person.image ) || defaultImage } alt="random user" className="user-img" />

                    <p className="user-title">My { title }</p>
                    <p className="user-value">{ value }</p>

                    <div className="values-list">
                        <button className="icon" data-label="name" onMouseOver={ handleValue }><FaUser /></button>
                        <button className="icon" data-label="email" onMouseOver={ handleValue }><FaEnvelopeOpen /></button>
                        <button className="icon" data-label="age" onMouseOver={ handleValue }><FaCalendarTimes /></button>
                        <button className="icon" data-label="street" onMouseOver={ handleValue }><FaMap /></button>
                        <button className="icon" data-label="phone" onMouseOver={ handleValue }><FaPhone /></button>
                        <button className="icon" data-label="password" onMouseOver={ handleValue }><FaLock /></button>
                    </div>

                    <button type="button" className="btn" onClick={ getPerson } disabled={ loading }>
                        { loading ? 'loading...' : 'random user' }
                    </button>
                </div>
            </div>
        </main>
    );
}


export default App;