import { FC } from "react";
import { Link } from "react-router-dom";


export const Error: FC = () => {
    return (
        <section className="error-page section">
            <div className="error-container">
                <h1>Oops! it's a dead end</h1>
                <Link to='/' className="btn btn-primary">Back Home</Link>
            </div>
        </section>
    );
};