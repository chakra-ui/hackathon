import { Heading, HeadingProps } from '@chakra-ui/react';

export const DefaultHeading = (props: HeadingProps) => {
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
      {...props}
    />
  );
};
