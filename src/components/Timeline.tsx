import { HStack, Icon, Stack, Text, Box, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { Check } from './Icons';

export interface TimelineItemProp {
  date: string;
  description: string;
  isActive: boolean;
}

export const TimelineItem = (props: TimelineItemProp) => {
  const { date, description, isActive, ...rest } = props;

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: '4', lg: '32' }}
    >
      <HStack {...rest} spacing='8'>
        <Icon
          width='auto'
          as={Check}
          fontSize={{ base: '2rem', lg: '2.5rem' }}
          color={isActive ? 'activeIcon' : 'muted'}
        />
        <Text
          lineHeight='tall'
          color={isActive ? 'defaultBody' : 'muted'}
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontWeight='medium'
          minW='300px'
        >
          {date}
        </Text>
      </HStack>
      <Text
        lineHeight='tall'
        color={isActive ? 'defaultBody' : 'muted'}
        fontSize={{ base: 'xl', lg: '2xl' }}
        fontWeight='medium'
        textAlign='left'
      >
        {description}
      </Text>
    </Stack>
  );
};

export const Timeline = () => {
  return (
    <Box bg='alternativeBg' as='section'>
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx='auto'
        px={{ base: '6', md: '8' }}
        py='12'
      >
        <Heading
          size='2xl'
          lineHeight='short'
          fontWeight='extrabold'
          color='defaultHeading'
        >
          Timeline
        </Heading>
        <Stack spacing={{ base: '20', lg: '12' }} my='20'>
          <TimelineItem
            isActive
            date='May 3rd @ 12 noon GMT'
            description='Team Registration opens'
          />
          <TimelineItem
            isActive={false}
            date='May 5th @ 12 noon GMT'
            description='Team Registration closes'
          />
          <TimelineItem
            isActive={false}
            date='May 6th'
            description='Hackathon Introduction and Structure (YouTube)'
          />
          <TimelineItem
            isActive={false}
            date='May 6th'
            description='Teams join the Discord Channel + Engagement'
          />
          <TimelineItem
            isActive={false}
            date='May 9th'
            description='Start hacking!'
          />
          <TimelineItem
            isActive={false}
            date='May 9th - May 11th'
            description='Elimination Round'
          />
          <TimelineItem
            isActive={false}
            date='May 12th'
            description='Announcing teams moving to the next stage'
          />
          <TimelineItem
            isActive={false}
            date='May 12th - May 18th'
            description='Final Round'
          />
          <TimelineItem
            isActive={false}
            date='May 19th'
            description='Team Presentations & Judging'
          />
          <TimelineItem
            isActive={false}
            date='May 19th'
            description='Winners announced!'
          />
        </Stack>
      </Box>
    </Box>
  );
};
