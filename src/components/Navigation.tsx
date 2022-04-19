import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import * as React from 'react';
import { ChakrathonLogo } from './Icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useViewportScroll } from 'framer-motion';

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

  const NavItems = [
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

  return (
    <Box as='section' pb={{ base: '12', md: '24' }}>
      <Box
        as='nav'
        bg='defaultBg'
        position='fixed'
        w='100%'
        zIndex='1'
        ref={ref}
        shadow={y > height ? 'base' : undefined}
        transition='box-shadow 0.2s, background-color 0.2s'
      >
        <Box
          py={{ base: '4', lg: '5' }}
          maxW={{ base: 'xl', md: '7xl' }}
          mx='auto'
        >
          <HStack spacing='10' justify='space-between' px='8'>
            <Icon
              width='auto'
              as={ChakrathonLogo}
              color='defaultHeading'
              fontSize={{ base: '2rem', lg: '2.5rem' }}
            />
            {isDesktop ? (
              <Flex justify='space-between' flex='1'>
                <ButtonGroup variant='link' spacing='8'>
                  {NavItems.map((item, index) => (
                    <Button
                      as='a'
                      href={item.link}
                      key={index}
                      textDecoration='none'
                      _hover={{
                        textDecoration: 'none',
                        color: 'teal.400',
                      }}
                    >
                      {item.nav}
                    </Button>
                  ))}
                </ButtonGroup>
                <Spacer />
                <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Switch color mode'
                  fontSize='16px'
                  onClick={toggleColorMode}
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                />
                <Button colorScheme='teal' ml='4'>
                  Register
                </Button>
              </Flex>
            ) : (
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Switch color mode'
                fontSize='16px'
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
