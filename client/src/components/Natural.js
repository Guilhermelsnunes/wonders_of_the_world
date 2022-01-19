import NavBar from "./NavBar";
import WondersContainer from "../containers/WondersContainer";

const Natural = ({wonders, selectedWonder, mapSelectedWonder, onWonderSelected}) => {
    return (
        <div id="grid">
            <header id="header">

            <img className="logo" src={"/img/wonderlogo.gif"}></img>
 
            </header>
            <nav id="nav-bar">
            <NavBar />
            </nav>
            <section id="content-1">
            <h1>The 7 Natural Wonders of the World</h1>
              <WondersContainer wonders={wonders} selectedWonder={selectedWonder} onWonderSelected={onWonderSelected} mapSelectedWonder={mapSelectedWonder}/>
            </section>
    </div>
    );
}

export default Natural;