import { Circle, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

interface GoalDescriptionProps {
  children: React.ReactNode;
  number: number;
}

export const GoalDescription = (props: GoalDescriptionProps) => {
  const { children, number } = props;
  return (
    <Stack
      direction='row'
      align='start'
      rounded='2xl'
      spacing='4'
      bg='defaultBg'
      color='defaultText'
      shadow='lg'
      pr='10'
      pl='6'
      py='8'
      textAlign='start'
    >
      <Circle
        fontWeight='semibold'
        size='10'
        bg='accentText'
        color='defaultBg'
        flexShrink={0}
      >
        {number}
      </Circle>
      <Text color='defaultText'>{children}</Text>
    </Stack>
  );
};
