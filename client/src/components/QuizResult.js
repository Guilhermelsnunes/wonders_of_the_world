const QuizResult= ({score, medalAward}) => {
    return(
        <>
        <h2 className='you-have-won'>YOU HAVE WON</h2>
        <h2 className='medal'>{medalAward()}</h2>
        <h3 className='score'>{score}/9</h3>
        </>
    )
}

export default QuizResult