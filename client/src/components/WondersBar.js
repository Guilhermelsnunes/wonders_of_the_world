import WonderButton from "./WonderButton";
import './WondersBar.css';

const WondersBar = ({ wonders, onWonderSelected }) => {

    wonders.sort(function (a, b) {
        let wonder1 = a.name.toUpperCase();
        let wonder2 = b.name.toUpperCase();
        return (wonder1 < wonder2) ? -1 : (wonder1 > wonder2) ? 1 : 0;
    });


    return (
        <div className="wonder-bar">
            {wonders.map(wonder => {
                return (
                    <div key={wonder._id}>
                        <WonderButton wonder={wonder} onWonderSelected={onWonderSelected} />
                    </div>
                )
            })}
        </div>
    )
}

export default WondersBar;

