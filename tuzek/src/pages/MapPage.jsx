import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import fireData from '../data/fireData.json';

export default function MapPage() {

    console.log(fireData.data);

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

    return (
        <Container>
            <MapContainer center={[47.2, 19.42]} zoom={8} scrollWheelZoom={true} style={MapContainerStyle}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {fireData.data.map(f => (
                    <Marker 
                        key={f.id}
                        position={[f.latitude, f.longitude]} 
                        icon={FireMarker}
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
    )
}

const Container = styled.div`
    width: 96vw;
    height: 94vh;
    margin: auto;
    margin-top: 3vh;
    border: 1px solid red;
    box-shadow: 0px 0px 20px #e21616;
    border-radius: 25px;
    @media(orientation: portrait){
        width: 98vw;
        height: 98vh;
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