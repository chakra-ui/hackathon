import { Box, HStack, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { DefaultHeading } from './DefaultHeading';
import { Check } from './Icons';
import { rulesData } from '../data/data';

interface RuleItemProps {
  title: string;
  description: string;
}

const RuleItem = (props: RuleItemProps) => {
  const { title, description, ...rest } = props;
  return (
    <HStack {...rest} spacing='8' alignItems='start'>
      <Icon
        width='auto'
        as={Check}
        fontSize={{ base: '2rem', lg: '2.5rem' }}
        color='activeIcon'
      />
      <Stack spacing='1'>
        <Text
          lineHeight='tall'
          color='accentText'
          fontSize={{ base: 'md', lg: 'lg' }}
          fontWeight='extrabold'
        >
          {title}
        </Text>
        <Text lineHeight='tall' color='defaultBody' minW='300px'>
          {description}
        </Text>
      </Stack>
    </HStack>
  );
};

export const Rules = () => {
  return (
    <Box bg='alternativeBg' as='section'>
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx='auto'
        px={{ base: '6', md: '8' }}
        py='20'
      >
        <DefaultHeading>The Rules</DefaultHeading>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing='8'
          pt={{ base: '8', lg: '20' }}
        >
          {rulesData.map((item, index) => {
            return (
              <RuleItem
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
