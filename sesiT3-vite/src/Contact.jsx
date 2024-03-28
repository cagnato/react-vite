import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import Menu from "./components/Menu"
import style from "./Contact.module.css"

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export const Contact = () => {
const geoData = ({lat: -25.4249069, lng: -49.2749302})
    return(
        <>
        <Menu/>
         <div className={style.wrapContact}>
            <div>
                <h2>Mapa</h2>
                <div style={{width: "100%", height: "auto"}}>
                <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{width: "99%", height: "400px"}}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[geoData.lat, geoData.lng]}>
                    <Popup>
                        <a target="_blank" href="https://www.google.com.br/maps/search/senai+paula+gomes/@-25.4249069,-49.2749302,17z?entry=ttu">Google maps</a>
                    </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
            <div>
                <h2>Zap</h2>
            </div>
        </div>
        </>
    )
}