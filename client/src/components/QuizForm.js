import { useState } from 'react'
import Question from './Question'
import Confetti from 'react-confetti'

const QuizForm = ({ questions, onQuizSubmit }) => {

    const [submittedAnswers, setSubmittedAnswers] = useState({})
    const [confettiOn, setConfettiOn] = useState(false)

    const handleAnswerChange = (evt) => {
        const currentAnswer = evt.target.value
        const answerIndex = evt.target.name
        const copySubmittedAnswers = {...submittedAnswers}
        copySubmittedAnswers[questions[answerIndex].question] = currentAnswer
        setSubmittedAnswers(copySubmittedAnswers)
    }

    const handleQuizSubmit = (evt) => {
        evt.preventDefault()

        onQuizSubmit(submittedAnswers)
        setSubmittedAnswers([])
    }

    const handleConfetti = () => {
        setConfettiOn(true)
    }

    return (
        <div className='questions'>
            {confettiOn ? <Confetti width={1750} height={900} /> : null}
            <form onSubmit={handleQuizSubmit}>

                <div className='question-grid'>
                    {questions.map((question, index) => {
                        return (
                            <div className='question-item' key={index}>
                                <Question question={question} index={index} handleAnswerChange={handleAnswerChange} />
                            </div>
                        )
                    })}
                </div>
                <button className='submit-quiz' onClick={handleConfetti} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default QuizForm;