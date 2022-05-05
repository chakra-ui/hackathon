import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { Timer } from './Timer';

export const Header = () => {
  return (
    <Box
      as="section"
      maxW={{ base: 'xl', md: '2xl' }}
      mx="auto"
      px={{ base: '6', md: '8' }}
      py="20"
      textAlign="center"
    >
      <Text textTransform="uppercase" fontWeight="semibold" color="accentText">
        May 3rd - May 19th 2022
      </Text>

      <Heading
        mt="6"
        fontSize={{ base: '4rem', md: '6rem' }}
        lineHeight="1"
        fontWeight="extrabold"
        letterSpacing="tight"
        color="defaultHeading"
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
      <Box py="10">
        <Text color="defaultBody" fontSize="lg" lineHeight="tall">
          Join us for the first ever <b>Chakrathon</b> to build the next best
          component in Chakra UI. Come engage, learn, and contribute.
        </Text>
        <Flex
          mt={10}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            as={Link}
            href="https://www.youtube.com/watch?v=JuIBuy3qd_U"
            colorScheme="red"
            isExternal={true}
            leftIcon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
              </svg>
            }
          >
            Watch Announcement
          </Button>
          <Button
            as={Link}
            href="https://discord.gg/chakra-ui"
            colorScheme="purple"
            isExternal={true}
            ml={{ base: 0, md: 8 }}
            mt={{ base: 4, md: 0 }}
            leftIcon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
              </svg>
            }
          >
            Join Discord
          </Button>
        </Flex>
      </Box>
      <Center py="4">
        <Timer />
      </Center>
    </Box>
  );
};
