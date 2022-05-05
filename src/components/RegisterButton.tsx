import { Button, Flex } from '@chakra-ui/react';
import * as React from 'react';

export const RegisterButton = () => {
  const canRegister = Date.now() >= new Date('2022-05-03').getTime();
  const hasExpired = Date.now() >= new Date('2022-05-05').getTime();

  if (!canRegister) {
    return (
      <Flex
        display='inline-flex'
        align='center'
        px='4'
        bg='teal.100'
        color='teal.700'
        rounded='md'
        py='2'
      >
        <span>
          Registration opens <b>May 3rd</b>
        </span>
      </Flex>
    );
  }

  return (
    <Button
      colorScheme='teal'
      variant={canRegister ? 'solid' : 'ghost'}
      as='a'
      disabled={hasExpired}
      href={
        !hasExpired &&
        'https://docs.google.com/forms/d/1TxLVq0IWRkmCv4z8Yf5DYm89OxDl5WyWPAexgZRX1WU/edit'
      }
      target='_blank'
    >
      {hasExpired ? 'Registration closed' : 'Register now'}
    </Button>
  );
};
