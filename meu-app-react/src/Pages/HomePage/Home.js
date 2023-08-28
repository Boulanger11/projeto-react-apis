import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import { Container, ContainerHome, Title, TitleContainer } from './HomeStyle';
import Header from '../../Components/Header/Header';
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';

const Home = () => {
    const context = useContext(GlobalContext)

    const { pokelist, addToPokedex, pokedex } = context

    const filteredPokelist = () =>
        pokelist.filter(
            (pokemonInList) =>
                !pokedex.find(
                    (pokemonInPokedex) =>
                        pokemonInList.name === pokemonInPokedex.name
                )
        )

    return (
        <Container>
            <Header />
            <TitleContainer>
                <Title>Todos Pokémons</Title>
            </TitleContainer>
            <ContainerHome>
                {filteredPokelist().map((pokemon) => (
                    <PokemonCard
                        key={pokemon.url}
                        pokemonUrl={pokemon.url}
                        addToPokedex={addToPokedex}

                    />
                ))}
            </ContainerHome>
        </Container>
    )
}

export default Home