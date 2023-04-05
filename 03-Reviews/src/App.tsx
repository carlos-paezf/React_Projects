import { ReviewComponent } from './components/ReviewComponent';

function App () {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our reviews</h2>

                    <div className="underline"></div>
                </div>

                <ReviewComponent />
            </section>
        </main>
    );
}

export default App;
