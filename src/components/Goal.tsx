import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { FeatureGoals } from './FeatureGoals';
import { GoalDescription } from './GoalDescription';
import { Design, Develop, Document, Ideate } from './Icons';

export const Goal = () => {
  return (
    <Box as='section' id='about'>
      <Box bg='secondaryBg' color='white' pt='24' pb='32'>
        <Box
          maxW={{ base: 'xl', md: '7xl' }}
          mx='auto'
          px={{ base: '6', md: '8' }}
        >
          <Heading
            size='2xl'
            lineHeight='short'
            fontWeight='extrabold'
            color='secondaryHeading'
          >
            Build the next best component in Chakra UI
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: '12', md: '8', lg: '2' }}
            mt={{ base: '12', md: '20' }}
          >
            <FeatureGoals icon={Ideate} title='Ideate'>
              Map out the component API. Figure out all of the moving parts and
              how the component will be implemented and used.
            </FeatureGoals>
            <FeatureGoals icon={Design} title='Design'>
              Design the component and variations using tools like Figma. It’s
              always a good idea to have all variations design before
              implementing them.
            </FeatureGoals>
            <FeatureGoals icon={Develop} title='Develop'>
              Develop the actual component. Turn your designs into an actual,
              usable Chakra UI component code.
            </FeatureGoals>
            <FeatureGoals icon={Document} title='Document'>
              Provide a documentation on how to use the component, its props and
              different variations.
            </FeatureGoals>
          </SimpleGrid>
        </Box>
      </Box>

      <Box bg='alternativeBg' py='4'>
        <Box
          maxW={{ base: 'xl', md: '7xl' }}
          mx='auto'
          px={{ base: '6', md: '8' }}
          py='16'
        >
          <Box
            textAlign={{ base: 'left', lg: 'center' }}
            mx='auto'
            maxW={{ base: 'unset', lg: '600px' }}
          >
            <Heading fontWeight='extrabold' size='2xl' as='h3'>
              Get ready, tomodachi ✌️!
            </Heading>
            <Stack mt='14' spacing='6'>
              <GoalDescription number={1}>
                The theme for this Hackathon is <b>Anime</b>. This means every
                team will have the freedom to pick their favorite Anime as their
                team name. eg. Team Naruto
              </GoalDescription>
              <GoalDescription number={2}>
                Registration is on a team basis and not per individual. This
                means that to be a part of the hackathon, you should register as
                a team.
              </GoalDescription>
              <GoalDescription number={3}>
                The goal of this hackathon is to foster collaboration. As a
                result, each team should comprise of a minimum of 2 people.
              </GoalDescription>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
