import {
  Center,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react';
import * as logos from './Logos';

export const LogoGrid = () => (
  <Box bg='alternativeBg'>
    <Container maxW='container.xl' py={{ base: '12', md: '20' }}>
      <Stack spacing='8'>
        <Text
          fontSize={{ base: 'md', md: '3xl' }}
          fontWeight='bold'
          textAlign='center'
          color='defaultHeading'
        >
          Sponsored by
        </Text>
        <SimpleGrid
          gap={{ base: '4', md: '6' }}
          columns={{ base: 2, md: 3, lg: 6 }}
        >
          {Object.entries(logos).map(([name, Logo]) => (
            <Center key={name}>
              <Logo
                h={{ base: '8', md: '12' }}
                maxW='180px'
                fill='emphasized'
              />
            </Center>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
