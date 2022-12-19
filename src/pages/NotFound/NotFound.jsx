import React from 'react';
import { FcHome } from 'react-icons/fc';
import { Box } from 'components/Box';
import { Text, StyledBackHome } from './NotFound.styled';

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Text>404</Text>
      <Text>page not found :(</Text>
      <StyledBackHome to="/">
        <FcHome />
        Back to Home
      </StyledBackHome>
    </Box>
  );
};

export default NotFound;
