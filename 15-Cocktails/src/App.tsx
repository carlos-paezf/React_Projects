import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { SingleCocktail } from './pages/SingleCocktail';


function App () {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='about' element={ <About /> } />
                <Route path='cocktail/:id' element={ <SingleCocktail /> } />
                <Route path='*' element={ <Error /> } />
            </Routes>
        </Router>
    );
}


export default App;