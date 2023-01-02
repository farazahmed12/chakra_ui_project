import React from 'react';
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Avatar,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
          <Heading alignSelf={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={32} />

          <Input
            type={'text'}
            placeholder="Name"
            required
            focusBorderColor="purple.500"
          />
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

          <Button colorScheme={'purple'} type="submit">
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Alreay a user?{' '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
