import { FC, useEffect, useState } from "react";
import { LoadingComponent } from "./components/LoadingComponent";
import { ButtonComponent } from "./components/ButtonComponent";
import { JobType } from "./types";
import { JobComponent } from "./components/JobComponent";

const URL = 'https://course-api.com/react-tabs-project';

function App () {
    const [ loading, setLoading ] = useState( true );
    const [ jobs, setJobs ] = useState<JobType[]>( [] );
    const [ value, setValue ] = useState( 0 );

    const fetchJobs = async () => {
        try {
            const response = await fetch( URL );
            const newJobs = await response.json();
            setJobs( newJobs );
        } catch ( error ) {
            console.log( error );
        } finally {
            setLoading( false );
        }
    };

    useEffect( () => {
        fetchJobs();
    }, [] );

    if ( loading ) return <LoadingComponent />;

    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>

                <div className="underline"></div>
            </div>

            <div className="jobs-center">
                <div className="btn-container">
                    {
                        jobs.map( ( item, idx ) => (
                            <ButtonComponent key={ idx }
                                index={ idx }
                                job={ item }
                                value={ value }
                                setValue={ setValue } />
                        ) )
                    }
                </div>

                <JobComponent { ...jobs[ value ] as JobType } />
            </div>

            <button type="button" className="btn">More Info</button>
        </section>
    );
};

export default App;