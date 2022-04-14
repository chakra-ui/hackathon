import {
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { FirstPosition, SecondPosition, ThirdPosition } from './Icons';

export interface PrizeCardProps {
  name: string;
  prize: string;
  icon: React.ElementType;
  bg: string;
  maxW: string;
  paddingTop: string;
}

export const PrizeCard = (props: PrizeCardProps) => {
  const { name, icon, prize, bg, maxW, paddingTop, ...rest } = props;

  return (
    <Box
      bg={bg}
      position='relative'
      px='6'
      pb='6'
      pt={paddingTop}
      overflow='hidden'
      shadow='lg'
      maxW={maxW}
      width='100%'
      {...rest}
    >
      <VStack spacing={6}>
        <Heading
          as='h4'
          size='md'
          fontWeight='extrabold'
          color='secondaryHeading'
        >
          {name}
        </Heading>
        <Icon aria-hidden as={icon} fontSize='5xl' />
      </VStack>
      <Flex align='flex-end' justify='center' fontWeight='extrabold' my='8'>
        <Heading
          size='xl'
          fontWeight='inherit'
          lineHeight='0.9em'
          color='secondaryHeading'
        >
          {prize}
        </Heading>
      </Flex>
    </Box>
  );
};

export const Prizes = () => (
  <Box as='section' bg='secondaryBg' py='20' px={{ base: '4', md: '8' }}>
    <Box py='8'>
      <Heading
        size='2xl'
        lineHeight='short'
        fontWeight='extrabold'
        color='secondaryHeading'
        textAlign='center'
      >
        Prizes
      </Heading>
    </Box>
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      spacing={{ base: '8', lg: '0' }}
      maxW='696px'
      mx='auto'
      justifyItems='center'
      alignItems='baseline'
      py='8'
    >
      <PrizeCard
        icon={SecondPosition}
        name='Second Position'
        prize='$200'
        bg='whiteAlpha.200'
        maxW='md'
        paddingTop='8'
      />
      <PrizeCard
        icon={FirstPosition}
        name='First Position'
        prize='$200'
        bg='whiteAlpha.300'
        maxW='md'
        paddingTop='16'
      />
      <PrizeCard
        icon={ThirdPosition}
        name='Third Position'
        prize='$200'
        bg='whiteAlpha.200'
        maxW='md'
        paddingTop='8'
      />
    </SimpleGrid>
    <Text
      textAlign='center'
      pt='4'
      lineHeight='tall'
      color='secondaryBody'
      fontSize={{ base: 'xl', lg: '2xl' }}
    >
      * Prizes are awarded per team
    </Text>
  </Box>
);
