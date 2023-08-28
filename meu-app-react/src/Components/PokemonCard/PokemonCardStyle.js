import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  height: 13rem;
  min-width: 15rem;
  max-width: 40rem;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 15px;
  color: #ffffff;

  @media screen and (min-width: 400px) and (max-width: 1300px) {
    height: 11rem;
    min-width: 15rem;
    max-width: 40rem;
    }

    .pokemon{
    width: 14rem;
    height: 11rem;
    position: absolute;
    top: -38px;
    right: -1px;
    z-index: 2;

    @media screen and (min-width: 400px) and (max-width: 1300px) {
      width: 10rem;
      height: 9rem; 
      position: absolute;
      top: -30px;
      right: 12px;
    }
    }

        .btnCaptura {
        display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 15px;
  right: 22px;
  z-index: 2;
  color: #000;
  font-size: 1.2rem;

      @media screen and (min-width: 400px) and (max-width: 1300px) {
      width: 100px;
      height: 30px;
      font-size: 1rem;
    }
  }
  

        .btnExcluir{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #FF6262;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 15px;
  right: 22px;
  z-index: 2;
  color: #ffffff;
  font-family: poppins;
  font-size: 1.2rem;

  @media screen and (min-width: 400px) and (max-width: 1300px) {
      width: 80px;
      height: 30px; 
    }
        }
        
        .btnDetalhes {
            text-decoration: underline;
            font-family: poppins;
            font-size: 1.2rem;
            cursor: pointer;
            margin-top: 15vh;
            position: absolute;
            bottom: 20px;
            right: 80%;
            border: none;
            background-color: ${(props) => props.color};
            color: white;

            @media screen and (min-width: 400px) and (max-width: 1300px) { 
            position: absolute;
            bottom: 20px;
            right: 70%;
            font-weight: 550;
    }
            
        }

        .types{
            position: absolute;
            top: 1;
            left: 0;
            margin-left: 0.8rem;
            margin-top: 4.9rem;
            
            @media screen and (min-width: 400px) and (max-width: 1300px) { 
              position: absolute;
            top: 1;
            left: 0;
            margin-left: 0.8rem;
            margin-top: 3.7rem;
            img {
              height: 3vh;
            }
          }
        }
        
        

`


export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  position: relative;
  top: 14px;

  @media screen and (min-width: 400px) and (max-width: 1300px) { 
    font-size: 14px;
  }
`
export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  right: 30px;
  top: 30px;

  @media screen and (min-width: 400px) and (max-width: 1300px) { 
    font-size: 20px;
    position: relative;
  right: 25px;
  top: 30px;
  }

`
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (min-width: 400px) and (max-width: 1300px) {
    position: absolute;
    top: 0;
    right: 2px; 
    }
`

