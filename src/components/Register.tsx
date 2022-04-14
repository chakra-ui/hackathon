import { Box, Button, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';

export const Register = () => {
  return (
    <Box
      as='section'
      bg='defaultBg'
      px={{ base: '6', md: '8' }}
      py='16'
      textAlign='center'
    >
      <Box mx='auto'>
        <Text pt='8' lineHeight='tall' color='teal.500' fontWeight='bold'>
          Are you ready?
        </Text>
        <Box maxW='xl' mx='auto'>
          <Heading
            py='4'
            size='2xl'
            lineHeight='short'
            fontWeight='extrabold'
            color='defaultHeading'
          >
            Register for the Chakrathon
          </Heading>
        </Box>
        <Text py='4' lineHeight='tall' color='defaultBody' fontSize='lg'>
          We would love to see what wonderful component design you come up with!
        </Text>
        <Button mt='8' size='lg' as='a' colorScheme='teal' href='#'>
          Register
        </Button>
      </Box>
    </Box>
  );
};
