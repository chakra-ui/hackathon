import { Box, Text, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';

interface GoalDescriptionProps {
  children: React.ReactNode;
}

export const GoalDescription = (props: GoalDescriptionProps) => {
  const { children } = props;
  return (
    <Box
      rounded='2xl'
      bg='defaultBg'
      color='defaultText'
      shadow='lg'
      px='10'
      py='8'
    >
      <Text color='defaultText'>{children}</Text>
    </Box>
  );
};
