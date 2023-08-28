import GlobalContext from './GlobalContext'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { BASE_URL } from '../constants/url';
import addImage from '../assets/addImage.png'
import removeImage from '../assets/removeImage.png'

export const GlobalState = ({ children }) => {
    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [modalImageSrc, setModalImageSrc] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        fetchPokelist();
    }, []);

    const fetchPokelist = async () => {
        try {
            const response = await axios.get(BASE_URL)
            setPokelist(response.data.results)
        } catch (error) {
            console.log('Erro ao buscar lista de pokemons')
            console.log(error.response)
        }
    }

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        )

        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex)
            setModalImageSrc(addImage)
        }
        
        
    }

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        )

        setPokedex(newPokedex)
        setModalImageSrc(removeImage)
    }

    const data = {
        removeFromPokedex,
        addToPokedex,
        fetchPokelist,
        pokedex,
        setPokedex,
        pokelist,
        setPokelist,
        modalImageSrc,
        setModalImageSrc,
        openModal,
        setOpenModal,
        
    }

    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
}