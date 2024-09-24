
import React from "react";
import { useSelector } from "react-redux";
import { Box, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function Result() {
  const quiz = useSelector((state) => state.quiz);
  const navigate = useNavigate();

  const handleReset = () => {
    navigate('/quiz'); 
  };

  return (
    <>
      <Box >
        <div>
          <Heading as="h2" size="lg" mb={4}>
            Quiz Result
          </Heading>
          <p>Your final score: {quiz.score}</p>
          <Button colorScheme="teal" onClick={handleReset}>Reset</Button>
        </div>
      </Box>
    </>
  );
}

export default Result;
