import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import useState from 'react'
import Menu from "./components/Menu"
import style from "./Contact.module.css"

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export const Contact = () => {
const geoData = ({lat: -25.4249069, lng: -49.2749302})

const defaultPhoneNumber = '5541991792406'

const [formData, setFormData] = useState({name: '', email: '', message: ''})

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
}

const handleWhatsAppMessage = () => {
    const {name, email, message} = formData;

    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Nome:%20${email}%0D%0A
    Nome:%20${message}%0D%0A`;

    window.open(urlZap, '_blank')
} 

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
                <div>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text"  id='name' name='name' value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text"  id='email' name='email' value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="message">Mensagem</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button onClick={handleWhatsAppMessage()}></button>
                </div>
            </div>
        </div>
        </>
    )
}