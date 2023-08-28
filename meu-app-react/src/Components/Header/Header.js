import pokemon from '../../assets/image1.png'
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer } from "./Style";
import { goToHome, goToPokedex } from "../../Routes/Coordinator";

const Header = () => {

    const location = useLocation()

    const navigate = useNavigate()

    const render = () => {
        switch (location.pathname) {
            case '/':
                return (
                    <>
                        <img src={pokemon} alt="logo" />
                        <button className='btnPokedex' onClick={() => goToPokedex(navigate)}>
                            Pokedex
                        </button>

                    </>
                );
            case '/pokedex':
                return (
                    <>
                        <img src={pokemon} alt="" />
                        <button className='btnPokemons' onClick={() => goToHome(navigate)}>
                            Todos Pokémons
                        </button>

                    </>
                );
            default:
                return (
                    <>
                        <img src={pokemon} alt="logo" />
                        <button className='btnPokemons1' onClick={() => goToHome(navigate)}>
                            Todos Pokémons
                        </button>
                        <button className='btnExcluir' onClick={() => goToHome(navigate)}>
                            Excluir da Pokédex
                        </button>
                    </>
                )
        }
    }

    return <HeaderContainer>{render()}</HeaderContainer>;
}
export default Header;