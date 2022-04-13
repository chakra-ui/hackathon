import * as React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';

interface FeatureGoalsProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}

export const FeatureGoals = (props: FeatureGoalsProps) => {
  const { title, children, icon } = props;
  return (
    <Box>
      <Box color='goalIcon' fontSize='2.5rem'>
        {icon}
      </Box>
      <Stack mt='6'>
        <Text as='h3' fontSize='lg' fontWeight='bold' color='secondaryHeading'>
          {title}
        </Text>
        <Text pr='6' lineHeight='tall' color='secondaryText'>
          {children}
        </Text>
      </Stack>
    </Box>
  );
};
