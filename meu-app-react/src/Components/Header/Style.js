import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: relative;
    right: 2;
    top: 0;
    height: 7rem;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100vw;
    

    img {
        width: 16rem;
       
    }
    .btnPokedex {
        position: absolute;
        right: 0;
        margin: 2rem;
        width: 10rem;
        height: 3rem;
        font-size: 1rem;
        font-weight: bold;
        padding: 4px 10px;
        border-color: #33A4F5;
        border-radius: 0.5rem;
        background: #33A4F5;
        color: white;
    }

    .btnPokemons {
        position: absolute;
        left: 0;
        margin: 2rem;
        padding: 4px 10px;
        border: none;
        background-color: white;
        font-size: 1.6rem;
        font-weight: bold;
        background-size: contain;
        text-decoration-line: underline;
    }

    .btnPokemons1 {
        position: absolute;
        left: 0;
        margin: 2rem;
        padding: 4px 10px;
        border: none;
        background-color: white;
        font-size: 1.6rem;
        font-weight: bold;
        background-size: contain;
        text-decoration-line: underline;
    }

    .btnExcluir {
        position: absolute;
        right: 0;
        margin: 2rem;
        width: 10rem;
        height: 3rem;
        padding: 4px 10px;
        border-color: #FF6262;
        border-radius: 0.5rem;
        background: #FF6262;
        color: white;
        font-size: 0.9rem;
    }
`