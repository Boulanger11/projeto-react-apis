
export const goToHome = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToDetailsPage = (navigate, pokemonName) => {
    navigate(`/${pokemonName}`);
}
