import styled from 'styled-components';

export const Container = styled.main`
    background-color: #5E5E5E;  
`;

export const TitleContainer = styled.div`
  display: block;
  width: 100%;
  padding: 2.5rem;
  

`

export const Title = styled.h1`
  font-weight: 900;
  color: white;
  font-family: Poppins;
  font-size: 3rem;
`

export const ContainerHome = styled.main`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;

    @media screen and (min-width: 400px) and (max-width: 1300px) {
      grid-gap: 0;
    }
`

