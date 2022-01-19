import NavBar from "./NavBar";
import WondersContainer from "../containers/WondersContainer";

const Ancient = ({wonders, selectedWonder, onWonderSelected}) => {
    return (
        <div id="grid">
            <header id="header">

            <img className="logo" src={"/img/wonderlogo.gif"}></img>

            </header>
            <nav id="nav-bar">
            <NavBar />
            </nav>
            <section id="content-1">
            <h1>The 7 Ancient Wonders of the World</h1>
              <WondersContainer wonders={wonders} selectedWonder={selectedWonder} onWonderSelected={onWonderSelected}/>
            </section>
            <footer id="footer">
              <h3>Footer</h3>
            </footer>
    </div>
    );
}

export default Ancient;