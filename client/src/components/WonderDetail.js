import React, { useState, useEffect } from 'react';
import Speech from 'react-speech';
import PuzzlePic from './PuzzlePic';
import './WonderDetail.css';
 

const WonderDetail = ({wonder}) => {
    
    const [factsListenedTo, setFactsListenedTo] = useState([]);
    const [funFactUnlocked, setFunFactUnlocked] = useState(false);
    const [puzzleKey, setPuzzleKey] = useState(0)
    
    useEffect(() => {
        checkAllFactsListened();
      }, [factsListenedTo])

    useEffect(() => {
        clearFunFact();
        changePuzzleKey();
      }, [wonder])

    const clearFunFact = () => {
        setFactsListenedTo([]);
        setFunFactUnlocked(false);
    }

    const changePuzzleKey = () => {
        const now = Date.now()
        setPuzzleKey(now)
    }

    const handleClickFact1=() => {
        const updatedFactsListenedTo = [...factsListenedTo, "fact 1"];
        setFactsListenedTo(updatedFactsListenedTo);        
    }

    const handleClickFact2=() => {
        const updatedFactsListenedTo = [...factsListenedTo, "fact 2"];
        setFactsListenedTo(updatedFactsListenedTo);
    }

    const handleClickFact3=() => {
        const updatedFactsListenedTo = [...factsListenedTo, "fact 3"];
        setFactsListenedTo(updatedFactsListenedTo);
    }
    
    

    const checkAllFactsListened = async () => {
        const allFacts = ["fact 1", "fact 2", "fact 3"]
        if (allFacts.every(item => factsListenedTo.includes(item))){
            const delay = milliseconds => new Promise(res => setTimeout(res, milliseconds));
            await delay(5000);
            setFunFactUnlocked(true);
        }
    }

    const sayNameAndLocation = () => {
        const combinedName = `${wonder.name}. ${wonder.location}`
        return (
            combinedName
        )
    }

    return(
        <div className='wonder-detail'>
            <h2><Speech text={sayNameAndLocation()} textAsButton={true} displayText="▶" voice="Google UK English Female" />
{wonder.name}</h2>
            <h3>{wonder.location}</h3>
            
            <div className='both-pics'>
                <PuzzlePic wonder={wonder} key={puzzleKey}/>
                <img className="complete-img" src={`/img/${wonder.image}`} alt={wonder.name} />
            </div>
            
            
            <p><i onClick={handleClickFact1}><Speech text={wonder.facts[0]} textAsButton={true} displayText="▶" voice="Google UK English Female" /></i>{wonder.facts[0]}</p>

            <p><i onClick={handleClickFact2}><Speech text={wonder.facts[1]} textAsButton={true} displayText="▶" voice="Google UK English Female" /></i>{wonder.facts[1]}</p>

            <p><i onClick={handleClickFact3}><Speech text={wonder.facts[2]} textAsButton={true} displayText="▶" voice="Google UK English Female" /></i>{wonder.facts[2]}</p>
                
            {funFactUnlocked ? 
                <>
                    <h3>⭐️ Well Done! You Unlocked the Fact!⭐️ </h3>
                    <p><Speech text={(wonder.funFact)} textAsButton={true} displayText="▶" voice="Google UK English Female" />
{wonder.funFact}</p> 
                </>: 
                    <h3>🔒 Listen to all 3 facts above to unlock crazy fact! 🔒</h3> }

        </div>
    )
}

// render(
//     <WonderDetail />,
//     document.getElementById('root')
//   );

export default WonderDetail