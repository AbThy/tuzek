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
                Az aszály alatt sorra vízhasználati korlátozásokat kell bevezetni. Amelyik gazda nem tud locsolni,
                nem számíthat jó termésre. A földben tárolt víz elpárolgott, folyóink árnyékai régi önmaguknak, a fák pedig
                elkezdték lehullajtani leveleiket augusztus közepén.
            </P>
            <P style={Blue}>
                Az tuzek.hu -n interaktív térképen nézheted meg a magyarországi vadtüzek listáját. (Tehát kigyulladt üzemek, kamionok, stb. nincsenek jelölve,
                csak ahol erdők, mezők, avar, vagy hasonlók égtek.) <br/>
                A tűzesetek pozíciója, ideje és a hozzájuk tartozó hírek a <A href="https://katasztrofavedelem.hu" target="_blank">Katasztrófavédelem weboldaláról</A> származnak.
                <br/>Jelenleg a 2022 nyarán történt eseteket mutatja a térkép, a jövőben pedig tervben van egy részletes kereső fejlesztése.
            </P>
            <P>
                Rengeteg tűz autóutak vagy vasúti pályák mellett keletkezik. Sajnos valószínű, hogy ezeket eldobott csikkek okozták. <br/><br/>
                1. Ne dobj el égő csikket (de lehetőleg mást sem)! <br/>
                2. Soha ne gyújts tüzet tűzgyújtűsi tilalom alatt, lehetőleg a kertedben sem! <br/>
                3. Ne hagyj felügyeletlenül még izzó tűzrakóhelyet sem! <br/>
                4. Ha látszólag teljesen ki is aludt, a tűz magja napokig forró maradhat, és egy kis széllel meggyújthatja környezetét. Mindig öntsd le folyadékkal a tűzrakóhelyet, mielőtt elhagyod!
            </P>
            <P>
                Hogy állunk vízzel magyarországon? <A href="https://telex.hu/cimke/szarazsag" target="_blank">Telex - Szárazság cikksorozat</A><br/>
                Hogyan állítsuk meg az elsivatagosodást? Érdekesség a témában: <A href="https://www.youtube.com/watch?v=vpTHi7O66pI&ab_channel=TED" target="_blank">Allan Savory TED talk</A>
            </P>
            <P/>
            <P/>
            <PSign>
                2022 - <A href="https://www.fwsystems.hu" target="_blank">Future Web Systems</A>
            </PSign>
        </Section>
        <FeatureSection>
        <MapSection>
            <Link to="/terkep" style={noDecor}>
                <H3Link>Térkép megnyitása</H3Link>
                <IMG src={mapImage} alt=""/>
            </Link>
        </MapSection>
        </FeatureSection>
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
`;
const H3Link = styled.h3`
    color: white;
    text-decoration: none;
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

    transition: 0.3s;
    transition-timing-function: ease-out;
    &:hover{
        transform: scale(1.03);
        transition: 0.4s;
        transition-timing-function: ease-out;
    }

    @media(orientation: portrait){
        width: 90vw;
    }
`;

const Blue = {
    color: '#CCDEFF'
}

const FeatureSection = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;