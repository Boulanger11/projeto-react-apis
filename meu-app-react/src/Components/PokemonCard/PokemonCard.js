import { useLocation, useNavigate } from "react-router-dom"
import addImage from "../../assets/addImage.png"
import removeImage from "../../assets/removeImage.png"
import { Container, Pokeball, PokemonName, PokemonNumber } from './PokemonCardStyle'
import pokeball from '../../assets/pngwing 2.png'
import axios from 'axios'
import { useEffect, useState, useContext } from "react"
import { getPokemonTypes } from "../PokemonTypes/PokemonTypes"
import { getPokemonColors } from "../PokemonColors/PokemonColors"
import GlobalContext from "../../contexts/GlobalContext"


const PokemonCard = (props) => {

    const { pokemonUrl, addToPokedex, removeFromPokedex } = props
    const { setModalImageSrc, setOpenModal } = useContext(GlobalContext)

    const location = useLocation()
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({
        name: "",
        sprites: {
            front_default: "",
        },
        types: [],
    })


    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(pokemonUrl)
            setPokemon(response.data)
            console.log(response)
        } catch (error) {
            console.log('Erro ao buscar lista de pokemons')
            console.log(error)
        }
    };

    const pokemonId = () => {
        if (pokemon.id < 10) {
            return `#0${pokemon.id}`
        } else {
            return `#${pokemon.id}`
        }
    }

    return (
        <Container color={getPokemonColors(pokemon.types[0]?.type.name)}>
            <img className="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
            <PokemonNumber>{pokemonId()}</PokemonNumber>
            <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
            <div>
                {location.pathname === '/' ? (
                    <button className="btnCaptura" onClick={() =>{
                        addToPokedex(pokemon);
                        setModalImageSrc(addImage);
                        setOpenModal(true);
                    }}>
                        Capturar!
                    
                    </button>
                ) : (
                    <button className="btnExcluir" onClick={() => {
                        removeFromPokedex(pokemon);
                        setModalImageSrc(removeImage);
                        setOpenModal(true);
                        }}>
                        Excluir
                    </button>
                )}
                <div className="types">
                    {pokemon.types.map((type, index) => (
                        <img
                            key={index}
                            src={getPokemonTypes(type.type.name)}
                            alt={type.type.name}
                        />
                    ))}
                </div>
                <button className="btnDetalhes" onClick={() => navigate(`/detail/${pokemon.name}`)}>
                    Detalhes
                </button>

                <Pokeball src={pokeball} alt="pokeball" />


            </div>


        </Container >
    )
}

export default PokemonCard