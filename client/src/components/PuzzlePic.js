import Puzzle from 'react-image-puzzle';

const PuzzlePic = ({wonder}) => {
    return(
        <Puzzle image={`/img/${wonder.image}`}/>
    )
}

export default PuzzlePic;
