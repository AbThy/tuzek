import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { getFires } from '../API/fireAPI.js';
import { updateView } from '../API/viewAPI';

export default function MapPage() {

    const [fireData, setFireData]   = useState(null);
    const [ready, setReady]         = useState(false);
    const [mapZoom, setMapZoom]       = useState(8);

    useEffect(() => {
        getFires().then(r => {
            setFireData(r.data);
        }).then(r2 => {
            updateView().then(r3 => {
                setReady(true);
            })
        })
    },[]);

    const FireMarker = L.icon({
        iconUrl: require('../media/fireIcon.png'),
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        popupAnchor: new L.Point(0, -20),
        shadowAnchor: null,
        iconSize: new L.Point(40, 45),
        background: null
    })
    const HugeFireMarker = L.icon({
        iconUrl: require('../media/fireIcon_huge.png'),
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        popupAnchor: new L.Point(0, -20),
        shadowAnchor: null,
        iconSize: new L.Point(60, 80),
        background: null
    })

    if(ready){
    return (
        <React.Fragment>

        <Container>
            <MapContainer center={[47.2, 19.42]} zoom={mapZoom} scrollWheelZoom={true} style={MapContainerStyle}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {fireData.map(f => (
                    <Marker 
                        key={f.id}
                        position={[f.latitude, f.longitude]} 
                        icon={f.huge ? HugeFireMarker : FireMarker}
                    >
                            <Popup>
                                <H4>{f.location}</H4>
                                <H5>{f.date}</H5>
                                <P>{f.description}</P>
                            </Popup>
                    </Marker>
                ))
                }
            </MapContainer>
        </Container>

        <Footer>
            <A href='https://www.katasztrofavedelem.hu/' target={'_blank'}>Forrás: Katasztrófavédelem</A>
            <A href='https://fwsystems.hu' target={'_blank'}>Szigethy Ábrahám</A>
            <A href='https://www.freepik.com/free-vector/flame-icons-collection_1006711.htm#query=fire' target={"_blank"}>Flame icon vector created by rwdd_studios - www.freepik.com</A>
        </Footer>

        </React.Fragment>
    )} else {
        return(
            <React.Fragment></React.Fragment>
        )
    }
}

const Container = styled.div`
    width: 96vw;
    height: 94vh;
    margin: auto;
    margin-top: 2vh;
    border: 1px solid red;
    box-shadow: 0px 0px 20px #e21616;
    border-radius: 25px;
    @media(orientation: portrait){
        width: 98vw;
        height: 94vh;
        margin-top: 1vh;   
    }
`;

const MapContainerStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "25px"
}

const H4 = styled.h4`
    margin: 3px;
`;
const H5 = styled.h5`
    margin: 3px;
`;
const P = styled.p`
    margin: 2px;
`;

const Footer = styled.div`
  height: 3vh;
  display: flex;
  margin-left: 1vw;
  justify-content: space-around;
  padding-left: 1vw;
  
`;
const A = styled.a`
  color: white;
  margin-top: 0.5vh;
  font-size: 12px;
  @media(orientation: portrait){
        font-size: 10px; 
    }
`;