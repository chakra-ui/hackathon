import {
  Box,
  BoxProps,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FirstPosition, SecondPosition, ThirdPosition } from './Icons';

export interface WinnerCardProps extends BoxProps {
  name: string;
  prize: string;
  icon: React.ElementType;
  team: string;
}

export const WinnerCard = (props: WinnerCardProps) => {
  const { name, icon, prize, bg, maxW, paddingTop, fontSize, team, ...rest } =
    props;

  return (
    <Box
      bg={bg}
      position="relative"
      px={10}
      pb={10}
      pt={paddingTop}
      overflow="hidden"
      shadow="lg"
      maxW={maxW}
      width="100%"
      {...rest}
    >
      <VStack spacing={6}>
        <Heading
          as="h4"
          size="md"
          fontWeight="extrabold"
          color="secondaryHeading"
        >
          {name}
        </Heading>
        <Icon aria-hidden as={icon} fontSize={fontSize} />
      </VStack>
      <VStack
        align="center"
        justify="center"
        fontWeight="extrabold"
        my="8"
        spacing={6}
      >
        <Heading
          size="xl"
          fontWeight="inherit"
          lineHeight="0.9em"
          color="secondaryHeading"
        >
          {team}
        </Heading>
        <Heading
          size="md"
          fontWeight="inherit"
          lineHeight="0.9em"
          color="secondaryHeading"
        >
          {prize}
        </Heading>
      </VStack>
    </Box>
  );
};

export const Winners = () => (
  <Box
    as="section"
    id="winners"
    bg="secondaryBg"
    py="20"
    px={{ base: '4', md: '8' }}
    scrollMarginTop={24}
  >
    <Box py="8">
      <Heading
        size="2xl"
        lineHeight="short"
        fontWeight="extrabold"
        color="secondaryHeading"
        textAlign="center"
      >
        Winners 🥳!
      </Heading>
    </Box>
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      spacing={{ base: '8', lg: '0' }}
      maxW="920px"
      mx="auto"
      justifyItems="center"
      alignItems="end"
      py="8"
    >
      <WinnerCard
        icon={SecondPosition}
        team="Genki"
        name="Second Place"
        prize="$1000"
        bg="whiteAlpha.200"
        maxW="md"
        paddingTop="8"
        fontSize="6xl"
        order={{ base: 1, lg: 0 }}
      />
      <WinnerCard
        icon={FirstPosition}
        name="First Place"
        team="Dragonball"
        prize="$2000"
        bg="whiteAlpha.300"
        maxW="md"
        paddingTop="16"
        fontSize="7xl"
        order={{ base: 0, lg: 1 }}
      />
      <WinnerCard
        icon={ThirdPosition}
        team="Saitama"
        name="Third Place"
        prize="$750"
        bg="whiteAlpha.200"
        maxW="md"
        paddingTop="8"
        fontSize="5xl"
        order={2}
      />
    </SimpleGrid>
    <Text
      textAlign="center"
      pt="4"
      lineHeight="tall"
      color="secondaryBody"
      fontSize={{ base: 'xl', lg: '2xl' }}
      maxW="5xl"
      mx="auto"
    >
      * Prizes are awarded per team. Each team lead should submit an expense
      (invoice) to our{' '}
      <Link
        href="https://opencollective.com/chakra-ui"
        isExternal
        color="teal.500"
        fontWeight="bold"
      >
        Open Collective page
      </Link>{' '}
      with the correct prize sum and description of &quot;Chakra UI Hackathon:
      1st/2nd/3rd place&quot; (leave just your team&apos;s place). If you need
      help, feel free to reach out at our{' '}
      <Link href="https://discord.gg/chakra-ui" isExternal color="teal.500">
        Discord server
      </Link>
      .
    </Text>
  </Box>
);
