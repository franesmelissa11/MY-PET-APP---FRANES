type QuizQuestion = {
  qnum: number;
  question: string;
  options: string[];
};

type QuizComponentProps = {
  currQuestion: QuizQuestion;
  onNext: () => void;
};

function QuizComponent({ currQuestion, onNext }: QuizComponentProps) {
  return (
    <>
      <div className="quiz-container">
        <h1>Question #{currQuestion.qnum}</h1>
        <p>{currQuestion.question}</p>
        <ul>
          {currQuestion.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name={`question-${currQuestion.qnum}`}
                  value={option}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>

        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
}

export default QuizComponent;