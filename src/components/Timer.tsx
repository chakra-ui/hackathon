import { Box, HStack, Text, useInterval } from '@chakra-ui/react';
import * as React from 'react';

//TimeUnit
interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit = (props: TimeUnitProps) => {
  const { value, label } = props;
  return (
    <Box textAlign='center'>
      <Text
        fontWeight='semibold'
        fontSize={{ base: 'xl', md: '4xl' }}
        lineHeight='1'
      >
        {value.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
      </Text>
      <Text fontSize='xs' color='countdownText'>
        {label}
      </Text>
    </Box>
  );
};

//useTimer
interface UseTimerProps {
  expiresInSeconds: number;
}

export const useTimer = (props: UseTimerProps) => {
  const { expiresInSeconds } = props;
  const [seconds, setSeconds] = React.useState(
    getSecondsFromExpiry(expiresInSeconds)
  );

  useInterval(() => setSeconds(getSecondsFromExpiry(expiresInSeconds)), 1000);

  return {
    seconds: Math.floor(seconds % 60),
    minutes: Math.floor((seconds % (60 * 60)) / 60),
    hours: Math.floor((seconds % (60 * 60 * 24)) / (60 * 60)),
    days: Math.floor(seconds / (60 * 60 * 24)),
  };
};

const getSecondsFromExpiry = (expire: number) =>
  Math.round((expire - new Date().getTime()) / 1000);

const expiresInSeconds = new Date('2022-05-06').getTime();

//Timer
export const Timer = () => {
  const { seconds, minutes, hours, days } = useTimer({
    expiresInSeconds,
  });

  return (
    <Box
      bg='countdownBg'
      color='countdownText'
      borderRadius='lg'
      py='4'
      px={{ base: '6', md: '8' }}
    >
      <Text pb='4'>Registration closes in:</Text>
      <HStack spacing={{ base: '6', lg: '16' }} px={{ base: '4', lg: '6' }}>
        <TimeUnit value={days} label='days' />
        <TimeUnit value={hours} label='hours' />
        <TimeUnit value={minutes} label='minutes' />
        <TimeUnit value={seconds} label='seconds' />
      </HStack>
    </Box>
  );
};
