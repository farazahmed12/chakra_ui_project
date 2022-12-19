import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        left={'4'}
        top={'4'}
        colorScheme={'purple'}
        w="10"
        h="10"
        p="0"
        borderRadius="full"
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      {/* Drawer */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Video Hub</DrawerHeader>
            <DrawerBody>
              {/* Vertical Buttons */}
              <VStack alignItems={'flex-start'}>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme="purple"
                >
                  <Link to={'/'}>Home</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme="purple"
                >
                  <Link to={'/videos'}>Videos</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme="purple"
                >
                  <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme="purple"
                >
                  <Link to={'/upload'}>Upload</Link>
                </Button>
              </VStack>

              {/*Horizontal buttons*/}
              <HStack
                pos={'absolute'}
                bottom={'10'}
                left={'0'}
                w={'full'}
                justifyContent={'space-evenly'}
              >
                <Button onClick={onClose} colorScheme="purple">
                  <Link to={'/login'}>Log In</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'outline'}
                  colorScheme="purple"
                >
                  <Link to={'/signup'}>Sign Up</Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
