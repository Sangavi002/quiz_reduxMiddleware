import { Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Quiz from './Component/Quiz';
import Result from './Component/Result';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
