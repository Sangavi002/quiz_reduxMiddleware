import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Flex, Input, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; 
import { loginAction } from "../Redux/action/loginAction"; 
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(username, password));
    navigate('/quiz');
  };

  return (
    <Box>
      <Flex justifyContent="center">
        <form onSubmit={handleSubmit}>
          <Heading mt={10} mb={5} textAlign="center">
            Login
          </Heading>
          <Box
            border="1px solid grey"
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={25}
            borderRadius="25px"
          >
            <Heading size="sm" mt={10} mb={5}>
              Username
            </Heading>
            <Input
              type="text"
              size="md"
              variant="filled"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Heading size="sm" mt={5} mb={5}>
              Password
            </Heading>
            <Input
              type="password"
              size="md"
              variant="filled"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button type="submit" colorScheme="teal" size="lg">
              Login
            </Button>
          </Box>
        </form>
      </Flex>
    </Box>
  );
}

export default Login;
