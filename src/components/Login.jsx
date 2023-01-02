import React from 'react';
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h="100vh" p="16">
      <form>
        <VStack
          alignItems={'strech'}
          m={'auto'}
          my={'16'}
          w={['full', '96']}
          spacing={8}
        >
          <Heading>Welcome Back</Heading>
          <Input
            type={'email'}
            placeholder="Email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            type={'password'}
            placeholder="Password"
            required="true"
            focusBorderColor="purple.500"
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            forget password?
          </Button>

          <Button colorScheme={'purple'} type="submit">
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'./signup'}>Signup</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
