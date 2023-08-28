import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/detail/:name" element={<PokemonDetailPage />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default Router;