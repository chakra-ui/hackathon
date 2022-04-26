import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { RegisterButton } from './RegisterButton';

export const Register = () => {
  return (
    <Box
      as='section'
      bg='defaultBg'
      px={{ base: '6', md: '8' }}
      pt='16'
      pb='24'
      textAlign='center'
    >
      <Flex direction='column' align='center' mx='auto'>
        <Text
          pt='8'
          textTransform='uppercase'
          fontWeight='semibold'
          color='accentText'
        >
          Are you ready?
        </Text>

        <Heading
          mx='auto'
          maxW='12ch'
          mt='6'
          fontSize={{ base: '3rem', md: '6rem' }}
          lineHeight='1'
          fontWeight='extrabold'
          letterSpacing='tight'
          color='defaultHeading'
        >
          Register for the Chakrathon
        </Heading>

        <Text py='4' lineHeight='tall' color='defaultBody' fontSize='lg' mb='6'>
          We would love to see what wonderful component design you come up with!
        </Text>

        <RegisterButton />
      </Flex>
    </Box>
  );
};
