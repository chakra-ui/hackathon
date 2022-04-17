import { Box, Icon, Stack, Text } from '@chakra-ui/react';

interface FeatureGoalsProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export const FeatureGoals = (props: FeatureGoalsProps) => {
  const { title, children, icon } = props;
  return (
    <Box>
      <Icon as={icon} color='goalIcon' fontSize='3rem' />
      <Stack mt='6'>
        <Text as='h3' fontSize='lg' fontWeight='bold' color='secondaryHeading'>
          {title}
        </Text>
        <Text pr='6' lineHeight='tall' color='secondaryBody'>
          {children}
        </Text>
      </Stack>
    </Box>
  );
};
