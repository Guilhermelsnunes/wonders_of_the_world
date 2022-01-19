const Question = ({question, index, handleAnswerChange}) => {
    const questionNumber = index + 1

    return (
        <>
            <h3>{questionNumber}. {question.question}</h3>
            <label>{question.choices[0]}</label>
            <input onChange={handleAnswerChange} name={index} type="radio" value={question.choices[0]}/>
            <br></br>
            <label>{question.choices[1]}</label>
            <input onChange={handleAnswerChange} name={index} type="radio" value={question.choices[1]}/>
            <br></br>
            <label>{question.choices[2]}</label>
            <input onChange={handleAnswerChange} name={index} type="radio" value={question.choices[2]}/>
        </>
    )
}

export default Question;