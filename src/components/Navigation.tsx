import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Spacer,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import * as React from 'react';
import { ChakrathonLogo } from './Icons';
import { RegisterButton } from './RegisterButton';

const navItems = [
  {
    nav: 'About',
    link: '#about',
  },
  {
    nav: 'Rounds',
    link: '#rounds',
  },
  {
    nav: 'Rules',
    link: '#rules',
  },
  {
    nav: 'Prizes',
    link: '#prizes',
  },
  {
    nav: 'Timeline',
    link: '#timeline',
  },
];

export const Navigation = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { toggleColorMode, colorMode } = useColorMode();

  const ref = React.useRef<HTMLHeadingElement>();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useViewportScroll();

  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box
        as="nav"
        bg="defaultBg"
        position="fixed"
        w="100%"
        zIndex="1"
        ref={ref}
        shadow={y > height ? 'base' : undefined}
        transition="box-shadow 0.2s, background-color 0.2s"
      >
        <Box
          py={{ base: '4', lg: '5' }}
          maxW={{ base: 'xl', md: '7xl' }}
          mx="auto"
        >
          <HStack spacing="10" justify="space-between" px="8">
            <Icon
              width="auto"
              as={ChakrathonLogo}
              color="defaultHeading"
              fontSize={{ base: '2rem', lg: '2.5rem' }}
            />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <HStack as="nav" aria-label="Quick links" spacing="8">
                  {navItems.map((item, index) => (
                    <Link
                      href={item.link}
                      key={index}
                      textDecoration="none"
                      fontWeight="medium"
                      rounded="sm"
                      _hover={{
                        textDecoration: 'none',
                        color: 'teal.400',
                      }}
                    >
                      {item.nav}
                    </Link>
                  ))}
                </HStack>

                <Spacer />

                <IconButton
                  variant="outline"
                  colorScheme="teal"
                  aria-label="Switch color mode"
                  onClick={toggleColorMode}
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  mr="4"
                />

                <Button
                  as={Link}
                  href="https://careerlyft.notion.site/Hackathon-2ed8b959a8804c6fb342c09b4c9f7d57"
                  colorScheme="gray"
                  isExternal
                  leftIcon={
                    <svg
                      stroke="black"
                      fill="black"
                      strokeWidth="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
                    </svg>
                  }
                >
                  The Challenge
                </Button>
              </Flex>
            ) : (
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Switch color mode"
                fontSize="16px"
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
