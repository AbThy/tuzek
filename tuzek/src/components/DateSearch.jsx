import React from 'react';
import styled from 'styled-components';

export default function DateSearch() {
  return (
    <React.Fragment>
        <Container>
            
        </Container>
        <PhoneLayout>
            <p>Dátum beállítása</p>
        </PhoneLayout>
    </React.Fragment>
  )
}

const Container = styled.div`
    position: absolute;
    right: 2.2vw;
    top: 2.5vh;
    width: 20vw;
    height: 200px;
    background-color: #ffffffc7;
    box-shadow: 0px 0px 5px black;
    z-index: 500;
    border-radius: 25px;
    @media(orientation: portrait){
        opacity: 0;
    }
`;

const PhoneLayout = styled.div`
    opacity: 0;
    position: absolute;
    right: 2vw;
    top: 2.2vh;
    padding: 5px;
    background-color: #ffffffc7;
    box-shadow: 0px 0px 5px black;
    z-index: 500;
    border-radius: 25px;
    @media(orientation: portrait){
        opacity: 1;
    }
`;