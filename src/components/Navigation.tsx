import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { ChakraLogo } from './Icons';

export const Navigation = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
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
              fontSize={{ base: '2rem', lg: '2.5rem' }}
            />
            {isDesktop && (
              <Flex justify='space-between' flex='1'>
                <ButtonGroup variant='link' spacing='8'>
                  {['About', 'Rounds', 'Rules', 'Prizes', 'Timeline'].map(
                    (item) => (
                      <Button key={item}>{item}</Button>
                    )
                  )}
                </ButtonGroup>
                <Spacer />
                <Button colorScheme='teal'>Register</Button>
              </Flex>
            )}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
