import {
  Center,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Box,
  HStack,
} from '@chakra-ui/react';
import * as logos from './Logos';

export const LogoGrid = () => (
  <Box>
    <Container maxW='container.xl' py={{ base: '12', md: '20' }}>
      <Stack spacing='8' align='center' px={{ base: '6', md: '8' }}>
        <Text
          fontSize={{ base: 'md', md: '2xl' }}
          fontWeight='bold'
          textAlign='center'
          color='defaultHeading'
        >
          Sponsored by
        </Text>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={{ base: '8', sm: '12', lg: '24' }}
        >
          {Object.entries(logos).map(([name, Logo]) => (
            <Logo key={name} h={{ base: '8', md: '12' }} fill='emphasized' />
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);
