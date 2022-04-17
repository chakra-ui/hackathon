import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import * as React from 'react';
import { ChakraLogo } from './Icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Navigation = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box as='section' pb={{ base: '12', md: '24' }}>
      <Box
        as='nav'
        boxShadow='base'
        bg='defaultBg'
        position='fixed'
        w='100%'
        zIndex='1'
      >
        <Box
          py={{ base: '4', lg: '5' }}
          maxW={{ base: 'xl', md: '7xl' }}
          mx='auto'
        >
          <HStack spacing='10' justify='space-between' px='8'>
            <Icon
              width='auto'
              as={ChakraLogo}
              color='defaultHeading'
              fontSize={{ base: '2rem', lg: '2.5rem' }}
            />
            {isDesktop ? (
              <Flex justify='space-between' flex='1'>
                <ButtonGroup variant='link' spacing='8'>
                  {['About', 'Rounds', 'Rules', 'Prizes', 'Timeline'].map(
                    (item) => (
                      <Button key={item}>{item}</Button>
                    )
                  )}
                </ButtonGroup>
                <Spacer />
                <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Switch color mode'
                  fontSize='16px'
                  onClick={toggleColorMode}
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                />
                <Button colorScheme='teal' ml='4'>
                  Register
                </Button>
              </Flex>
            ) : (
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Switch color mode'
                fontSize='16px'
                onClick={toggleColorMode}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              />
            )}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
