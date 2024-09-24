import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, submitAnswer } from "../Redux/action/quizAction";
import { Box, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(fetchQuiz());
  }, []);

  const handleAnswer = (optionIndex) => {
    const isCorrect =
      quiz.questions[currentQuestionIndex].correctOptionIndex === optionIndex;
    dispatch(submitAnswer(currentQuestionIndex, optionIndex, isCorrect)); 
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSkip = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    navigate('/result');
  };

  return (
    <>
      <Box>
        <div style={{textAlign: 'center'}}>
          <Heading as="h2" size="lg" mb={4}>
            Quiz Questions
          </Heading>
          {/* Display current question only */}
            {quiz.questions.length > 0 && (
                <div key={quiz.questions[currentQuestionIndex].id}>
                    <p>{quiz.questions[currentQuestionIndex].question}</p>
                    {quiz.questions[currentQuestionIndex].options.map(
                        (option, optionIndex) => (
                        <Button
                            key={optionIndex}
                            colorScheme="blue"
                            onClick={() => handleAnswer(optionIndex)} 
                            mt="2"
                            mr="2"
                        >
                            {option}
                        </Button>
                        )
                    )}
                {/* Skip button */}
                    <br />
                    <Button
                        colorScheme="orange"
                        onClick={handleSkip}
                        mt="2"
                        mr="2"
                    >
                        Skip
                    </Button>
                </div>
            )}
          
          {currentQuestionIndex === quiz.questions.length - 1 && (
            <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
          )}
        </div>
      </Box>
    </>
  );
}

export default Quiz;
