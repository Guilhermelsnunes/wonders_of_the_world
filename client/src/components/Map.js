import NavBar from "./NavBar";
import MapBox from '../components/MapBox.js'

const Map = ({ onMapWonderSelected, wonders }) => {
    return (
        <div className="map-page"> 
            <div id="grid">
                <header id="header">
                <img className="logo" src={"/img/wonderlogo.gif"}></img>
                </header>
                <nav id="nav-bar">
                    <NavBar />
                </nav>
                <section id="content-1">
                    <h2>Find your Favourite Wonder!</h2>
                    <div id="mapbox-div">
                        {wonders ? <MapBox onMapWonderSelected={onMapWonderSelected} wonders={wonders} /> : null}
                    </div>
                </section>
            </div>
        </div>
    );
}



export default Map;