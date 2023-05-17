import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SingleMovie } from "./SingleMovie";


function App () {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="movies/:id" element={ <SingleMovie /> } />
        </Routes>
    );
}


export default App;