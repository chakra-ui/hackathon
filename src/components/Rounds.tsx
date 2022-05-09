import {
  Box,
  Heading,
  HStack,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { DefaultHeading } from './DefaultHeading';
import { RoundOne, RoundTwo } from './Icons';

export const Rounds = () => {
  return (
    <Box
      as='section'
      id='rounds'
      maxW={{ base: 'xl', md: '7xl' }}
      mx='auto'
      px={{ base: '6', md: '8' }}
      py='20'
    >
      <DefaultHeading>The Rounds</DefaultHeading>
      <Text
        pt='4'
        lineHeight='tall'
        color='defaultBody'
        fontSize={{ base: 'xl', lg: '2xl' }}
      >
        The hackathon is divided into 2 rounds:
      </Text>
      <Box mt='16' mb='12'>
        <HStack spacing='4' align='start'>
          <Icon
            width='auto'
            as={RoundOne}
            fontSize={{ base: '2rem', lg: '2.5rem' }}
          />
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            lineHeight='short'
            fontWeight='extrabold'
            color='defaultHeading'
          >
            Round One (Elimination round)
          </Heading>
        </HStack>
        <Text
          pt='4'
          lineHeight='tall'
          color='defaultBody'
          fontSize={{ base: 'lg', lg: 'xl' }}
        >
          🗓 May 9th - May 11th, 2022
        </Text>
        <Box py='4'>
          <Text
            pt='4'
            lineHeight='tall'
            color='defaultBody'
            fontSize={{ base: 'lg', lg: 'xl' }}
          >
            This is where teams present their component API design and walk us
            through how they intend to build their components. The video
            submission requires to have at least one of your team members to
            speak about your solution to creating the component design. You are
            welcome to show your faces, but it is not required.
          </Text>
          <Box
            pt='4'
            lineHeight='tall'
            color='defaultBody'
            fontSize={{ base: 'lg', lg: 'xl' }}
          >
            <Text>Mode of submission:</Text>
            <UnorderedList>
              <ListItem>
                Create a 3-5 minute video describing the API design and the
                approach to tackling this challenge.
              </ListItem>
              <ListItem>Upload video to YouTube </ListItem>
              <ListItem>Complete the submission form </ListItem>
            </UnorderedList>
          </Box>
          <Text
            pt='4'
            lineHeight='tall'
            color='defaultBody'
            fontSize={{ base: 'lg', lg: 'xl' }}
            fontWeight='bold'
          >
            Deadline for Submission is 11th May @ 4pm GMT
          </Text>
          <Text
            pt='4'
            lineHeight='tall'
            color='defaultBody'
            fontSize={{ base: 'lg', lg: 'xl' }}
          >
            Only a selected number of teams will move on to the next stage.
            Information will be passed in the Discord channel.
          </Text>
        </Box>
      </Box>
      <Box mb='16' mt='12'>
        <HStack spacing='4' align='start'>
          <Icon
            width='auto'
            as={RoundTwo}
            fontSize={{ base: '2rem', lg: '2.5rem' }}
          />
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            lineHeight='short'
            fontWeight='extrabold'
            color='defaultHeading'
          >
            Round Two (Final round)
          </Heading>
        </HStack>
        <Text
          pt='4'
          lineHeight='tall'
          color='defaultBody'
          fontSize={{ base: 'lg', lg: 'xl' }}
        >
          🗓 May 12th - May 18th, 2022
        </Text>
        <Text
          pt='4'
          lineHeight='tall'
          color='defaultBody'
          fontSize={{ base: 'lg', lg: 'xl' }}
        >
          In this round the teams go more into depth in designing the actual
          components, the variations, building out the design and writing
          documentation on the usage of the component.
        </Text>
        <Box
          pt='4'
          lineHeight='tall'
          color='defaultBody'
          fontSize={{ base: 'lg', lg: 'xl' }}
        >
          <Text>Mode of submission:</Text>
          <UnorderedList>
            <ListItem>Provide a link to the GitHub Repo</ListItem>
            <ListItem>
              Create a 3-5 minute video describing your component, documentation
              and process
            </ListItem>
            <ListItem>Upload video to YouTube </ListItem>
            <ListItem>Complete the submission form </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};
