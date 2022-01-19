import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from 'leaflet'
import Icon_new_wonders1 from '../icons/Icon_new_wonders1.png'
import Icon_natural_wonders1 from '../icons/Icon_natural_wonders1.png'
import Icon_ancient_wonders1 from '../icons/Icon_ancient_wonders1.png'


const MapBox = ({ onMapWonderSelected, wonders }) => {

    const handleClick = (evt) => {
        const index = evt.target.value
        onMapWonderSelected(wonders[index])
    }

    const icon_new = L.icon({
        iconUrl: Icon_new_wonders1,
        iconSize: [35, 35],
    });

    const icon_ancient = L.icon({
        iconUrl: Icon_ancient_wonders1,
        iconSize: [35, 35],
    });

    const icon_natural = L.icon({
        iconUrl: Icon_natural_wonders1,
        iconSize: [35, 35],
    });


    const markerNodes =
        wonders.map((wonder, index) => {
            let marker = null
            const selectMarkerIcon = () => {
                if (wonder.icon === "icon_new") {
                    marker = icon_new
                } else if (wonder.icon === "icon_ancient") {
                    marker = icon_ancient
                } else {
                    marker = icon_natural
                }
            }
            selectMarkerIcon()

            return (
                <Marker key={index} position={[wonder.coords.lat, wonder.coords.lng]} icon={marker}>
                    <Popup>
                        {wonder.name} <br /> <Link to={wonder.collection}><button value={index} onClick={handleClick} type="button" >Learn More</button></Link>
                    </Popup>
                </Marker>
            )
        })


    return (

        <MapContainer center={[10.000, 0.00]} zoom={2} scrollWheelZoom={true} minZoom={2} maxZoom={14} maxBoundsViscosity={1} noWrap={true} maxBounds={[-90, -180], [90, 180]}>

            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {markerNodes}

        </MapContainer>
    )
}
export default MapBox;