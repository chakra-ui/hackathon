import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { FeatureGoals } from './FeatureGoals';
import { GoalDescription } from './GoalDescription';
import { Design, Develop, Document, Ideate } from './Icons';

export const Goal = () => {
  return (
    <Box as='section' pb='24'>
      <Box bg='secondaryBg' color='white' pt='24' pb='12rem'>
        <Box
          maxW={{ base: 'xl', md: '7xl' }}
          mx='auto'
          px={{ base: '6', md: '8' }}
        >
          <Stack
            spacing='10'
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'flex-start', lg: 'center' }}
            justify='space-between'
          >
            <Heading
              size='2xl'
              lineHeight='short'
              fontWeight='extrabold'
              maxW={{ base: 'unset', lg: '800px' }}
            >
              Build the next best component in Chakra UI!
            </Heading>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: '12', md: '8', lg: '2' }}
            mt={{ base: '12', md: '20' }}
          >
            <FeatureGoals icon={<Ideate />} title='Ideate'>
              Map out the component API. Figure out all of the moving parts and
              how the component will be implemented and used.
            </FeatureGoals>
            <FeatureGoals icon={<Design />} title='Design'>
              Design the component and variations using tools like Figma. It’s
              always a good idea to have all variations design before
              implementing them.
            </FeatureGoals>
            <FeatureGoals icon={<Develop />} title='Develop'>
              Develop the actual component. Turn your designs into an actual,
              usable Chakra UI component code.
            </FeatureGoals>
            <FeatureGoals icon={<Document />} title='Document'>
              Provide a documentation on how to use the component, its props and
              different variations.
            </FeatureGoals>
          </SimpleGrid>
        </Box>
      </Box>
      <Box mt='-12'>
        <Box
          maxW={{ base: 'xl', md: '7xl' }}
          mx='auto'
          px={{ base: '6', md: '8' }}
        >
          <SimpleGrid spacing='14' columns={{ base: 1, lg: 2 }} >
            <GoalDescription>
              Each team should comprise a minimum of 2 individuals and maximum
              of 3 individuals.
            </GoalDescription>
            <GoalDescription>
              All communication will be done via the #Chakrathon channel on
              Discord, so we encourage everyone to join the channel.
            </GoalDescription>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};
