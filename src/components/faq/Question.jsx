import './Question.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

const Question = ({title, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    function handleClick() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className='question'>
            <div className="question-title">
                <h4>{title}</h4>
                <button className="question-icon" onClick={handleClick}>
                    {
                        showAnswer ? 
                        <AiOutlineMinus color='red' /> :
                        <AiOutlinePlus color='#1F93FF' />
                    }
                </button>
            </div>

            <div className="question-answer">
                {
                    showAnswer &&
                    <p className="u-text-small u-text-dark">{answer}</p>
                }
            </div>
        </div>
    )
}

export default Question;