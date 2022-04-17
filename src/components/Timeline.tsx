import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { timelineData } from '../data/data';
import { DefaultHeading } from './DefaultHeading';
import { Check } from './Icons';

export interface TimelineItemProp {
  date: string;
  description?: string;
  isActive: boolean;
}

export const TimelineItem = (props: TimelineItemProp) => {
  const { date, description, isActive: defaultIsActive, ...rest } = props;
  const isPast = new Date() >= new Date(date);
  const isActive = defaultIsActive || isPast;

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
    <Box bg='defaultBg' as='section' py='20'>
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx='auto'
        px={{ base: '6', md: '8' }}
        py='8'
      >
        <DefaultHeading>Timeline</DefaultHeading>
        <Stack spacing={{ base: '20', lg: '12' }} my='20'>
          {timelineData.map((item, index) => {
            return (
              <TimelineItem
                isActive={index == 0}
                key={index}
                description={item.description}
                date={item.date}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};
