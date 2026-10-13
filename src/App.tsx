import { useState } from 'react'
import './App.css'
import QuestionComponent from './Components/QuestionComponent'

function App() {
  const [startQuiz, setStartQuiz] = useState(false)

  return (
    <>
      {startQuiz ? (
        <QuestionComponent />
      ) : (
        <div className="landingpage">
          <h1>Welcome to Front End Quiz</h1>
          <button onClick={() => setStartQuiz(true)}>Start Quiz</button>
        </div>
      )}
    </>
  )
}

export default App