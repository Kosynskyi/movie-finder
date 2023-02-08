import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import SwitchMode from 'components/SwitchMode/SwitchMode';
import { StyledNavLink } from './SharedLayout.styled';
import { Box } from 'components/Box';

const SharedLayout = () => {
  return (
    <div>
      <Box
        as="nav"
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        alignItems="center"
      >
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <SwitchMode />
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
