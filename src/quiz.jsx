import {useState} from "react";
import questions from "./questions";
import "./quiz.css";

const MAXSCORE = questions.length;
const quizQuestions = questions.sort((a, b) => 0.5 - Math.random());

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [answerIndex, setAnswerIndex] = useState(3);
    const [score, setScore] = useState(0);
    const [isResult, setIsResult] = useState(false);

    const currentQuestion = quizQuestions[activeQuestion];
    const answers = currentQuestion.answers;

    const handleAnswer = (answer, index) => {
        if (selectedAnswer === "") {
            setAnswerIndex(index);
            if (answer === currentQuestion.goodAnswer) {
                setSelectedAnswer("good");
                setScore(score => Math.min(score + 1, MAXSCORE));
            }
            else {
                setSelectedAnswer("bad");
            }
        }
    }

    const handleQuestionChange = () => {
        setActiveQuestion(activeQuestion => Math.min(activeQuestion + 1, MAXSCORE-1));
        setSelectedAnswer("");
        setAnswerIndex(3);
        if (activeQuestion === MAXSCORE-1) {
            setIsResult(true);
        }
    }

    const handleGameReset = () => {
        setScore(0);
        setIsResult(false);
        setActiveQuestion(0);
        quizQuestions.sort((a, b) => 0.5 - Math.random());
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

    return (
        <div className={"quiz-container"}>
            {!isResult ? (
            <div>
                <div>
                    <span className="active-question-no">{addLeadingZero(activeQuestion+1)}</span>
                    <span className="total-question">/{addLeadingZero(questions.length)}</span>
                </div>
                <h1>{currentQuestion.question}</h1>
                <ul>
                {answers.map(
                    (q, index) => {
                        return <li onClick={() => handleAnswer(q, index)}
                        key={q}
                        className={answerIndex !== index ? null :
                        selectedAnswer === "good" ? "good-answer" :
                        selectedAnswer === "bad" ? "bad-answer" : null}>
                        {q}
                        </li>
                    }
                )}
                </ul>
                <div className={"correct-answer"}>
                    {selectedAnswer === "bad" && <p>{`Poprawna odpowiedź: ${currentQuestion.goodAnswer}`}</p>}
                    {selectedAnswer === "good" && <p>Dobrze!</p>}
                </div>
                <div className="flex-right">
                    <h3 className={"result"}>{`Wynik: ${score}`}</h3>
                    <button className={"next-question"} onClick={handleQuestionChange} disabled={!selectedAnswer}>Następne pytanie</button>
                </div>
            </div>) : (
            <div>
                <div className={"result"}>
                    <p>{`Liczba pytań: ${MAXSCORE}`}</p>
                    <p>{`Poprawne odpowiedzi: ${score}`}</p>
                    <p>{`Błędy: ${MAXSCORE - score}`}</p>
                    <p>{`Wynik procentowy: ${Math.round(score / MAXSCORE * 100)}%`}</p>
                    <button className={"reset"} onClick={handleGameReset}>Spróbuj ponownie</button>
                </div>
            </div>
            )}
        </div>
    );
}

export default Quiz;
