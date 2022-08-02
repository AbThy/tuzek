import React from 'react';
import styled from 'styled-components';
import mapImage from '../media/map_image.JPG';
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <Container>
        <Section>
            <H1>tuzek.hu</H1>
            <P>
                Ahogy lassan az egész világon, Magyarországon is hatalmas probléma lett a szárazság.<br/><br/>
                Erdők, mezőgazdasági területek és otthonok égnek az esőt hónapok óta nem látott tájon. <br/>
                A szárazságban sorra vízhasználati korlátozásokat kell bevezetni. Amelyik gazda nem tud locsolni,
                 nem számíthat jó termésre. Ez a globális probléma a jövőben erős élelmiszerhiánnyá és
                éhínséggé nőhet.              
            </P>
            <P/>
            <P>
                Az tuzek.hu -n interaktív térképen nézheted meg a magyarországi tüzek listáját. 
                A tűzesetek pozíciója, ideje és a hozzájuk tartozó hírek a <A href="https://katasztrofavedelem.hu" target="_blank">Katasztrófavédelem weboldaláról</A> származnak.
            </P>
            <P/>
            <P>
                Hogyan előzzük meg a katasztrófát? Érdekesség a témában: <A href="https://www.youtube.com/watch?v=vpTHi7O66pI&ab_channel=TED">Allan Savory TED talk</A>
            </P>
            <P/>
            <P/>
            <PSign>
                2022 - Szigethy Ábrahám - fwsystems.hu
            </PSign>
        </Section>
        <MapSection>
            <Link to="/terkep" style={noDecor}>
                <H3Link>Tüzek Magyarországon - térkép</H3Link>
                <IMG src={mapImage} alt=""/>
            </Link>
        </MapSection>
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(orientation: portrait){
        flex-direction: column-reverse;
    }
    text-align: left;
`;

const H1 = styled.h1`
    font-size: 50px;
    text-shadow: 2px 2px 10px #fc3737;
`;

const P = styled.p`
    padding-left: 20px;
    text-shadow: 2px 2px 2px #a30000;
`;
const A = styled.a`
    color: white;
`;
const PSign = styled.p`
    color: #d39797;
    font-size: 13px;
    align-self: center;
`;

const IMG = styled.img`
    max-width: 70%;
    border-radius: 30px;
    box-shadow: 2px 5px 5px #fff1cc40;

    &:hover{
        transform: scale(1.02);
        transition: 0.3s;
        cursor: pointer;
    }
`;
const H3Link = styled.h3`
    color: white;
    text-decoration: none;
    &:hover{
        transform: scale(1.02);
        transition: 0.3s;
        cursor: pointer;
    }
`;
const noDecor = {
    textDecoration: "none",
    textAlign: "center"
}

const Section = styled.div`
    width: 40vw;
    border-radius: 30px;
    margin: 15px;
    padding: 3vw;
    display: flex;
    flex-direction: column;
    color: #fff1cc;
    @media(orientation: portrait){
        width: 90vw;
    }
`;
const MapSection = styled.div`
    width: 40vw;
    border-radius: 30px;
    margin: 15px;
    padding: 3vw;
    display: flex;
    flex-direction: column;
    color: #fff1cc;
    justify-content: center;
    align-items: center;
    @media(orientation: portrait){
        width: 90vw;
    }
`;