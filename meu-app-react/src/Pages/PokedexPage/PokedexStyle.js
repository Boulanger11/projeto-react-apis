import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #5E5E5E;
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
    }
`
export const TitleContainer = styled.div`
  display: block;
  width: 100%;
  padding: 3rem;
`

export const Title = styled.h1`
  font-weight: 900;
  color: white;
  font-size: 3rem;
`