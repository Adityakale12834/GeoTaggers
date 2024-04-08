import React, { useState } from 'react';

function QuizChallenge() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      answer: "Mars"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "CH4"],
      answer: "H2O"
    }
    // Add more questions as needed
  ];

  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === quizData[i].answer) {
        score++;
      }
    }
    return score;
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b  from-indigo-950 to-gray-900">
      <div className="bg-white text-white cursor-pointer   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 md:mt-0  sm:max-w-md w-full">
        {!showResult ? (
          <>
            <h1 className="text-3xl font-semibold mb-6 text-center">Quiz Challenge</h1>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">{quizData[currentQuestion].question}</h2>
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                {quizData[currentQuestion].options.map((option, index) => (
                  <label key={index} class="flex items-center mb-4  border  rounded-lg p-2">
                    <input
                      type="radio"
                      value={option}
                      checked={answers[currentQuestion] === option}
                      onChange={() => handleAnswer(option)}
                      class="mr-2 size-4  cursor-pointer"
                    />
                    <span className="ml-1 ">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <button onClick={nextQuestion} className="bg-blue-500 text-white px-4 py-2 rounded-md block mx-auto w-full hover:bg-blue-600">Next</button>
          </>
        ) : (
          <div>
            <h1 className="text-3xl font-semibold mb-6 text-center">Quiz Result</h1>
            <p className="mb-4 text-center">You've completed the quiz!</p>
            <p className="mb-4 text-center">Your score: {calculateScore()} / {quizData.length}</p>
            <button onClick={restartQuiz} className="bg-blue-500 text-white px-4 py-2 rounded-md block mx-auto w-full hover:bg-blue-600">Restart Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizChallenge;
