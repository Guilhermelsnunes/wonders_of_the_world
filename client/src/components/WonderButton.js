import './WonderButton.css'

const WonderButton = ({wonder, onWonderSelected}) => {
    const handleClick=() => {
        onWonderSelected(wonder)
    }

    return(
        <div>            
            <button className="wonder-button" type="button" onClick={handleClick} >{wonder.name}</button>
        </div>
    )
}

export default WonderButton;