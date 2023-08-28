import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { useContext } from "react"
import { MainContainer } from "./PokedexStyle"
import Header from "../../Components/Header/Header"
import { BASE_URL } from '../../constants/url'
import GlobalContext from '../../contexts/GlobalContext'
import { useParams } from "react-router-dom"
import { Title, TitleContainer } from "../HomePage/HomeStyle"

function PokedexPage(props) {
    // const { pokedex, removeFromPokedex } = props;
    const context = useContext(GlobalContext);
    const { pokedex, removeFromPokedex } = context;
    
    console.log("qualquer coisa", pokedex)
    return (
        <MainContainer>
            <Header />
            <TitleContainer>
                <Title>Meus Pokémons</Title>
            </TitleContainer>
            <section>
                {pokedex.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        pokemonUrl={`${BASE_URL}/${pokemon.name}`}
                        removeFromPokedex={removeFromPokedex}
                        
                    />
                ))}
            </section>
        </MainContainer>
    );
}

export default PokedexPage;