import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { judgingCriteriaData } from '../data/data';
import { DefaultHeading } from './DefaultHeading';
import { Check } from './Icons';

export interface CriteriaProp {
  children: React.ReactNode;
}

export const CriteriaItem = (props: CriteriaProp) => {
  const { children, ...rest } = props;

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: '4', lg: '32' }}
    >
      <HStack {...rest} spacing={{ base: '4', lg: '8' }} alignItems='start'>
        <Icon
          width='auto'
          as={Check}
          fontSize={{ base: '2rem', lg: '2.5rem' }}
          color='activeIcon'
        />
        <Text
          lineHeight='tall'
          color='defaultBody'
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontWeight='medium'
          minW='300px'
        >
          {children}
        </Text>
      </HStack>
    </Stack>
  );
};

export const Criteria = () => {
  return (
    <Box as='section' bg='alternativeBg' py='20'>
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx='auto'
        px={{ base: '6', md: '8' }}
      >
        <DefaultHeading> Judging Criteria</DefaultHeading>
        <Text
          pt='4'
          lineHeight='tall'
          color='defaultBody'
          fontSize={{ base: 'xl', lg: '2xl' }}
        >
          The teams will be judged based on the following criteria:
        </Text>
        <Stack spacing={{ base: '8', lg: '12' }} py='16'>
          {judgingCriteriaData.map((item, index) => {
            return <CriteriaItem key={index}>{item}</CriteriaItem>;
          })}
        </Stack>
      </Box>
    </Box>
  );
};
