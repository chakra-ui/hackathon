import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { TimelineItem } from './Timeline';

export const Criteria = () => {
  return (
    <Box as='section' bg='alternativeBg' py='20'>
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx='auto'
        px={{ base: '6', md: '8' }}
      >
        <Heading
          size='2xl'
          lineHeight='short'
          fontWeight='extrabold'
          color='defaultHeading'
        >
          Judging Criteria
        </Heading>
        <Text
          pt='4'
          lineHeight='tall'
          color='defaultBody'
          fontSize={{ base: 'xl', lg: '2xl' }}
        >
          The teams will be judged based on the following criteria:
        </Text>
        <Stack spacing={{ base: '8', lg: '12' }} py='16'>
          <TimelineItem
            isActive
            description='Ease of customization with style props'
          />
          <TimelineItem isActive description='The number of variations' />
          <TimelineItem isActive description='The usage of style props' />
          <TimelineItem isActive description='Proper documentation' />
          <TimelineItem isActive description='Look and feel of component' />
        </Stack>
      </Box>
    </Box>
  );
};
