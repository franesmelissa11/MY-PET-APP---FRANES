import { useState } from "react";
import QuizComponent from "./QuizComponent";

interface Question {
  qnum: number;
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    qnum: 1,
    question: "Which computer component is known as the brain of the system?",
    options: ["GPU", "CPU", "RAM", "Monitor"],
    answer: "CPU",
  },
  {
    qnum: 2,
    question: "What does RAM stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Rapid Application Module", "Runtime Analysis Machine"],
    answer: "Random Access Memory",
  },
  {
    qnum: 3,
    question: "Which device is used to store data permanently in most computers?",
    options: ["Keyboard", "SSD", "Mouse", "Speaker"],
    answer: "SSD",
  },
  {
    qnum: 4,
    question: "Which language is commonly used to style web pages?",
    options: ["HTML", "CSS", "Python", "SQL"],
    answer: "CSS",
  },
];

function QuestionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const objectValues = Object.values(questions);

  const handleNext = () => {
    if (currentIndex < objectValues.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <>
      <QuizComponent
        currQuestion={questions[currentIndex]}
        onNext={handleNext}
      />
    </>
  );
}

export default QuestionComponent;