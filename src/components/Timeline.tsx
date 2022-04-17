import { HStack, Icon, Stack, Text, Box, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { DefaultHeading } from './DefaultHeading';
import { Check } from './Icons';

export interface TimelineItemProp {
  description: string;
  info?: string;
  isActive: boolean;
}

export const TimelineItem = (props: TimelineItemProp) => {
  const { description, info, isActive, ...rest } = props;

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
          {description}
        </Text>
      </HStack>
      <Text
        lineHeight='tall'
        color={isActive ? 'defaultBody' : 'muted'}
        fontSize={{ base: 'xl', lg: '2xl' }}
        fontWeight='medium'
        textAlign='left'
      >
        {info}
      </Text>
    </Stack>
  );
};

export const Timeline = () => {
  return (
    <Box bg='alternativeBg' as='section' py='20'>
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx='auto'
        px={{ base: '6', md: '8' }}
        py='8'
      >
        <DefaultHeading>Timeline</DefaultHeading>
        <Stack spacing={{ base: '20', lg: '12' }} my='20'>
          <TimelineItem
            isActive
            description='May 3rd @ 12 noon GMT'
            info='Team Registration opens'
          />
          <TimelineItem
            isActive={false}
            description='May 5th @ 12 noon GMT'
            info='Team Registration closes'
          />
          <TimelineItem
            isActive={false}
            description='May 6th'
            info='Hackathon Introduction and Structure (YouTube)'
          />
          <TimelineItem
            isActive={false}
            description='May 6th'
            info='Teams join the Discord Channel + Engagement'
          />
          <TimelineItem
            isActive={false}
            description='May 9th'
            info='Start hacking!'
          />
          <TimelineItem
            isActive={false}
            description='May 9th - May 11th'
            info='Elimination Round'
          />
          <TimelineItem
            isActive={false}
            description='May 12th'
            info='Announcing teams moving to the next stage'
          />
          <TimelineItem
            isActive={false}
            description='May 12th - May 18th'
            info='Final Round'
          />
          <TimelineItem
            isActive={false}
            description='May 19th'
            info='Team Presentations & Judging'
          />
          <TimelineItem
            isActive={false}
            description='May 19th'
            info='Winners announced!'
          />
        </Stack>
      </Box>
    </Box>
  );
};
