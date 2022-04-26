import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Spacer,
  useBreakpointValue,
  useColorMode
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
                <HStack as='nav' aria-label='Quick links' spacing='8'>
                  {navItems.map((item, index) => (
                    <Link
                      href={item.link}
                      key={index}
                      textDecoration='none'
                      fontWeight='medium'
                      rounded='sm'
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
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Switch color mode'
                  onClick={toggleColorMode}
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  mr='4'
                />

                <RegisterButton />
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
