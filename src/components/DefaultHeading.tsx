import { Heading } from '@chakra-ui/react';

interface DefaultHeadingProps {
  children: React.ReactNode;
}

export const DefaultHeading = (props: DefaultHeadingProps) => {
  const { children } = props;
  return (
    <Heading
      size='2xl'
      lineHeight='short'
      fontWeight='extrabold'
      color='countdownText'
      textAlign='center'
      bg='countdownBg'
      display='inline-block'
      p='4'
      borderRadius='lg'
    >
      {children}
    </Heading>
  );
};
