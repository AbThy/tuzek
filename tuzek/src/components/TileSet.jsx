import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

  const TileSet = (props) => {

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
    props.tuzek.map(t => {
        <Marker position={t.coordinates} icon={FireMarker}>
        <Popup>
            {t.location} <br /> {t.date} <br /> {t.description}
        </Popup>
        </Marker>
    })
  )
}
export default TileSet;