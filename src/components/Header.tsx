import { Box, Center, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { RegisterButton } from './RegisterButton';
import { Timer } from './Timer';

export const Header = () => {
  return (
    <Box
      as='section'
      maxW={{ base: 'xl', md: '2xl' }}
      mx='auto'
      px={{ base: '6', md: '8' }}
      py='20'
      textAlign='center'
    >
      <Text textTransform='uppercase' fontWeight='semibold' color='accentText'>
        May 3rd - May 19th 2022
      </Text>

      <Heading
        mt='6'
        fontSize={{ base: '4rem', md: '6rem' }}
        lineHeight='1'
        fontWeight='extrabold'
        letterSpacing='tight'
        color='defaultHeading'
        sx={{
          span: {
            display: 'block',
            i: {
              fontSize: '0.8em',
            },
          },
        }}
      >
        <span>
          Ready <i>🚀</i>
        </span>
        <span>
          Set <i>⚡️</i>
        </span>
        <span>
          Build <i>🛠</i>
        </span>
      </Heading>
      <Box py='10'>
        <Text color='defaultBody' fontSize='lg' lineHeight='tall'>
          Join us for the first ever <b>Chakrathon</b> to build the next best
          component in Chakra UI. Come engage, learn, and contribute.
        </Text>
        <Box display={{ lg: 'none' }} mt='5'>
          <RegisterButton />
        </Box>
      </Box>
      <Center py='4'>
        <Timer />
      </Center>
    </Box>
  );
};
