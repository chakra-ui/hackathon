import { Box, Icon, Link, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ChakrathonLogo } from './Icons';

export const Footer = () => {
  return (
    <Box
      as='footer'
      bg='secondaryBg'
      px={{ base: '6', md: '8' }}
      py='10'
      textAlign={{ base: 'left', lg: 'center' }}
    >
      <Box maxW={{ base: 'xl', md: '2xl' }} mx='auto'>
        <Box py='4'>
          <Icon
            width='auto'
            color='white'
            as={ChakrathonLogo}
            fontSize={{ base: '1.5rem', lg: '2rem' }}
          />
        </Box>
        <Text
          color='secondaryBody'
          lineHeight='tall'
          fontSize='sm'
          opacity={0.7}
        >
          Chakrathon is organized by the maintainers of Chakra UI. The
          organizers are responsible for coordinating the rules and judging. For
          any questions and concerns, reach out to{' '}
          <Link
            color='teal.400'
            fontWeight='bold'
            href='mailto:chakrauilabs@gmail.com'
          >
            chakrauilabs@gmail.com
          </Link>
          . The organizers maintain the rights to enforce, adapt, or cancel
          terms of the competition in the spirit of fairness.
        </Text>
      </Box>
    </Box>
  );
};
