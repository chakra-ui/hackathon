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
        <Flex
          mt={10}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent='center'
          alignItems='center'
        >
          <Button
            as={Link}
            href='https://www.youtube.com/watch?v=JuIBuy3qd_U'
            colorScheme='red'
            isExternal
            leftIcon={
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 16 16'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z'></path>
              </svg>
            }
          >
            Watch Announcement
          </Button>
          <Button
            as={Link}
            href='https://careerlyft.notion.site/Hackathon-2ed8b959a8804c6fb342c09b4c9f7d57'
            colorScheme='gray'
            isExternal
            ml={{ base: 0, md: 8 }}
            mt={{ base: 4, md: 0 }}
            leftIcon={
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                role='img'
                viewBox='0 0 24 24'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title></title>
                <path d='M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z'></path>
              </svg>
            }
          >
            The Challenge
          </Button>
        </Flex>
      </Box>
      <Center py='4'>
        <Timer />
      </Center>
    </Box>
  );
};
