import { Box, Center, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
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
      <Box fontSize={{ base: '3xl', lg: '6xl' }} pb='4'>
        🚀
      </Box>
      <Heading
        size='2xl'
        lineHeight='short'
        fontWeight='extrabold'
        color='defaultHeading'
      >
        Ready, Set, Build!
      </Heading>
      <Box py='10'>
        <Text color='defaultBody' lineHeight='tall'>
          Join us for the first ever Chakra UI Hackathon! The goal of this
          Hakcathon is to drive community engagement and foster collaboration in
          the ecosystem. If you are a designer or developer that is interested
          in component design and building, this is a good event for you to
          engage, learn, and contribute to Chakra UI. This event will run from
          May 9th until May 19th, 2022.
        </Text>
      </Box>
      <Center py='4'>
        <Timer />
      </Center>
    </Box>
  );
};
