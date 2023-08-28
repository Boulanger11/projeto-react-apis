import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import pokeball from "../../assets/pngwing 3.png"
import Header from "../../Components/Header/Header";
import { StatRow } from "../../StatRow/StatRow"
import { BackPic, Container, ContainerDetail, ContainerStats, FrontPic, PicContainer, Stats, Subtitle, Title, TitleContainer, StatsName, DivStats, Number, PokemonNumber, PokemonName, TypesContainer, InfoPokemon, MovesContainer, Pokemon, PokemonType, PokeballDetail, PokeballDetail1 } from "./PokemonDetailStyle";
import { getPokemonColors } from "../../Components/PokemonColors/PokemonColors";
import { Moves } from "../../Moves/Moves";
import { getPokemonTypes } from "../../Components/PokemonTypes/PokemonTypes";
import { Pokeball } from "../../Components/PokemonCard/PokemonCardStyle";


const PokemonDetailPage = () => {
    const { name, imageUrl } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState({});
    const [image, setImage] = useState({ img: "" })

    useEffect(() => {
        if (pokemonDetails && pokemonDetails.sprites && pokemonDetails.sprites.other) {
        setImage({ img: pokemonDetails.sprites.other['official-artwork'].front_default })}
        fetchPokemonDetails();
    }, [pokemonDetails]);

    const fetchPokemonDetails = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setPokemonDetails(response.data);
            console.log(response.data.stats)
        } catch (error) {
            console.log("Erro ao buscar detalhes do Pokémon");
            console.log(error);
        }
    };

    const type = pokemonDetails.types && pokemonDetails.types[0]?.type.name

    const namePokemonUppercase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const getStatValue = (stats, index) => {
        return pokemonDetails && stats ? stats[index].base_stat : ''
    }

    const health = getStatValue(pokemonDetails.stats, 0)
    const attack = getStatValue(pokemonDetails.stats, 1)
    const defense = getStatValue(pokemonDetails.stats, 2)
    const spAtk = getStatValue(pokemonDetails.stats, 3)
    const spDef = getStatValue(pokemonDetails.stats, 4)
    const speed = getStatValue(pokemonDetails.stats, 5)

    const total = health + attack + defense + spAtk + spDef + speed

    const getMoves = (moves, index) => {
        return pokemonDetails && moves ? moves[index].move.name : ''
    }

    const move1 = namePokemonUppercase(getMoves(pokemonDetails.moves, 0))
    const move2 = namePokemonUppercase(getMoves(pokemonDetails.moves, 1))
    const move3 = namePokemonUppercase(getMoves(pokemonDetails.moves, 2))
    const move4 = namePokemonUppercase(getMoves(pokemonDetails.moves, 3))
    const move5 = namePokemonUppercase(getMoves(pokemonDetails.moves, 4))

    return (
        <Container>
            <Header />
            <PokeballDetail src={pokeball} alt="pokeball" />
            <TitleContainer>
                <Title>Detalhes</Title>
            </TitleContainer>
            <ContainerDetail color={getPokemonColors(type)}>

                <PicContainer id="pic-front">
                    <FrontPic src={pokemonDetails.sprites?.front_default} alt={name} >

                    </FrontPic>

                </PicContainer>
                <PicContainer id="pic-back">
                    <BackPic src={pokemonDetails.sprites?.back_default} alt={name}>

                    </BackPic>
                </PicContainer>
                <ContainerStats id="stats">
                    <Subtitle>Base Stats</Subtitle>
                    <Stats>
                        <StatRow statName="HP" statValue={health} />
                        <StatRow statName="Attack" statValue={attack} />
                        <StatRow statName="Defense" statValue={defense} />
                        <StatRow statName="Sp. Atk" statValue={spAtk} />
                        <StatRow statName="Sp. Def" statValue={spDef} />
                        <StatRow statName="Speed" statValue={speed} />
                        <DivStats>
                            <StatsName>Total</StatsName>
                            <Number> {total} </Number>
                        </DivStats>
                    </Stats>
                </ContainerStats>

                <InfoPokemon id="info-pokemon">
                    <PokemonNumber> #0{pokemonDetails.id} </PokemonNumber>
                    <PokemonName> {pokemonDetails.name && namePokemonUppercase(pokemonDetails.name)} </PokemonName>
                    <TypesContainer>
                        {pokemonDetails && pokemonDetails.types ? (
                            pokemonDetails.types.map((typeObj, index) => (
                                <PokemonType
                                    key={index}
                                    src={getPokemonTypes(typeObj.type.name)}
                                    alt={typeObj.type.name}
                                />
                            ))
                        ) : ('')}
                    </TypesContainer>
                </InfoPokemon>
                <MovesContainer id="moves">
                    <Subtitle>Moves</Subtitle>
                    <Moves moveName={move1} />
                    <Moves moveName={move2} />
                    <Moves moveName={move3} />
                    <Moves moveName={move4} />
                    <Moves moveName={move5} />
                </MovesContainer>

                <Pokemon src={image?.img} alt={name} id="pokemon-img" />
                <PokeballDetail1 src={pokeball} alt="pokeball" />

            </ContainerDetail>
        </Container>
    );
};

export default PokemonDetailPage;
{/* <img src={pokemonDetails.sprites?.front_default} alt={name} /> */ }