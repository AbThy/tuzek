import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function MapPage() {

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

    const tuzek = {
        tuz0: {
            date: "2022.07.31",
            coordinates: "46.451917, 19.940889",
            location: "Balástya",
            description: "Tíz hektárnyi gaz és avar gyulladt ki, 1 négyzetméteren egy tanya tetőszerkezete égett."
        }
    }

    return (
        <Container>
            <MapContainer center={[47.2, 19.42]} zoom={8} scrollWheelZoom={false} style={MapContainerStyle}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[46.253, 20.14824]} icon={FireMarker}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 90vw;
    height: 90vh;
    margin: auto;
    margin-top: 5vh;
    border: 1px solid red;
    box-shadow: 0px 0px 8px red;
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

/*
const Popup = styled.div`
    width: 10vw;
    height: 20vh;
    background-color: red;
`;*/