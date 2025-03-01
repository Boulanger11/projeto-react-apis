import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5c5c5d;
  color: white;
  height: 100%;
  min-height: 100vh;
  flex-grow: 1;
  
`

export const TitleContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  padding-left: 2rem;

  @media screen and (min-width: 600px) and (max-width: 992px){
    padding-left: 8.5rem;

  }

  @media screen and (min-width: 993px) and (max-width: 1365px){
    padding-left: 8.5rem;
  }

  @media screen and (min-width: 1366px){
    padding-left: 8.5rem;
  }
`

export const Title = styled.h1`
  font-weight: 900;
  
`

export const ContainerDetail = styled.div`
  background-color: ${(props) => props.color};
  background-size: contain;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 1fr);
  row-gap: 20px;
  justify-items: center;
  align-items: center;
  height: 68rem;
  width: 95vw;
  border-radius: 37px;
  position: relative;
  z-index: 1;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  

  @media screen and (min-width: 600px) and (max-width: 992px){
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    height: 77rem;
  } 

  @media screen and (min-width: 993px){
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 40rem;
    column-gap: 25px;
    margin-bottom: 0 1rem; 
    
  }

 @media screen and (min-width: 1600px){
    max-width: 80vw;
  } 
`

export const PicContainer = styled.div`
  position: relative;
  background-color: white;
  color: black;
  width: 7rem;
  height: 7rem;
  border-radius: 8px;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 3;

  

@media screen and (min-width: 992px) and (max-width: 1365px){
    margin-top: 0;
    width: 13rem;
    height: 13rem;
}

@media screen and (min-width: 1366px){
  margin-top: 0;
  width: 16rem;
  height: 16rem;
}
`
export const FrontPic = styled.img`
  height: 8rem;
  display: ${(props) => props.imgLoad};
  z-index: 3;

  @media screen and (min-width: 992px) and (max-width: 1365px){
    height: 10rem;
  }

  @media screen and (min-width: 1366px){
    height: 13rem;
  }
`

export const BackPic = styled.img`
  height: 8rem;
  display: ${(props) => props.imgLoad};
  z-index: 3;

  @media screen and (min-width: 992px) and (max-width: 1365px){
    height: 10rem;
  }

  @media screen and (min-width: 1366px){
    height: 13rem;
  }
`
export const ContainerStats = styled.div`
  position: relative;
  background-color: white;
  color: black;
  width: 15rem;
  height: 25rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  z-index: 3;
  

  @media screen and (min-width: 993px) and (max-width: 1365px){
    height: 100%;
    width: 15rem;
  }

  @media screen and (min-width: 1366px){
    height: 100%;
    width: 25rem;
  }
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-left: -1rem;

`
export const ButtonStats = styled.button`
  background-color: ${(props) => props.color};
  height: 1rem;
  width: ${(props) => props.width}%;
  border: none;
  border-radius: 10px;
  grid-column: 4 / span 5;
  align-items: center;
`

export const ButtonStatsTotal = styled.button`
  background-color: white;
  height: 1rem;
  width: 12rem;
  border: none;
  grid-column: 4 / span 5;
`
export const Subtitle = styled.h2`
  font-weight: 900;
  align-self: flex-start;
`

export const StatsName = styled.div`
  grid-column: 1 / span 2;
  justify-self: end;
  font-weight: 400;
  font-size: 13px;
  

  @media screen and (min-width: 1366px){
    font-size: 19px
  }
`

export const Number = styled.div`
  justify-self: center;
  font-weight: 600;
  font-size: 13px;
  
  @media screen and (min-width: 400px) and (max-width: 1300px) {
    font-size: 18px
  }
  margin: 0;
`

export const DivStats = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  align-items: center;
  margin-left: 1.5rem;
  column-gap: 5px;
  row-gap: 10px;
`

export const InfoPokemon = styled.div`
  position: relative;
  z-index: 3;

  @media screen and (min-width: 400px) and (max-width: 1300px){
    width: 32rem;
  }
`
export const MovesContainer = styled.div`
  background-color: white;
  color: black;
  width: 15rem;
  height: 22rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  margin-left: 3rem;
  z-index: 3;

  @media screen and (min-width: 993px){
    height: 100%;
    margin-right: 1.5rem;
  }


`
export const PokeballDetail = styled.img`
  display: none;


  @media screen and (min-width: 769px){
    display: block;
    position: absolute;
    margin-left: -10rem;
    height: 90%;
    overflow: hidden;
  }
`
export const PokemonNumber = styled.p`
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-align: left;

  @media screen and (min-width: 600px){
    font-size: 1.2rem;
  }
`
export const PokemonName = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (min-width: 600px) and (max-width: 1365px){
    font-size: 2rem;
  }

  @media screen and (min-width: 1366px){
    font-size: 3rem;
  }
`
export const PokemonType = styled.img`
  height: 1.4rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
  

  @media screen and (min-width: 600px) and (max-width: 1365px){
    max-width: 6.25rem;
    height: 2.2rem;
    margin-bottom: 10vw;
  } 

  @media screen and (min-width: 1366px){
    height: 2.2rem;
  }

`
export const TypesContainer = styled.div`

  @media screen and (min-width: 600px){
    margin-bottom: 3.25rem;
  }
`
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 13rem;
  z-index: 2;

  @media screen and (min-width: 600px) and (max-width: 992px){
    height: 30rem;
    position: absolute;
  top: 0;
  right: 2; 
  }

  @media screen and (min-width: 993px){
    height: 100%;
    
  }
`
export const Pokemon = styled.img`
  height: 10rem;
  position: absolute;
  top: -5.125rem;
  
  z-index: 3;
  

  @media screen and (min-width: 600px) and (max-width: 1134px){
    height: 13rem;
    position: absolute;
  top: -6rem;
  right: 6rem;

  }

  @media screen and (min-width: 1135px){
    top: -8.5rem;
    height: 16rem;
    right: 35px;
  }

`
export const PokeballDetail1 = styled.img`
  display: none;


  @media screen and (min-width: 769px){
    display: block;
    position: absolute;
    margin-left: 36.5rem;
    height: 100%;
    overflow: hidden;
  }
`

