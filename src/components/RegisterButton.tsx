import { Button, Flex } from '@chakra-ui/react';
import * as React from 'react';

export const RegisterButton = () => {
  return (
    <Button
      colorScheme='teal'
      variant='solid'
      as='a'
      href='https://docs.google.com/forms/d/1TxLVq0IWRkmCv4z8Yf5DYm89OxDl5WyWPAexgZRX1WU/edit'
      target='_blank'
    >
      Register now
    </Button>
  );
};
