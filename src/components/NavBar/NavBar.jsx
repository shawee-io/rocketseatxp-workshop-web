import React from 'react';
import { Flex, Box, Button } from '@primer/components';
import styled from 'styled-components';

const RocketSeatLogo = styled.img`
  width: 100px;
`;

const ShaweeLogo = styled(RocketSeatLogo)`
  width: 120px;
  filter: brightness(100);
`;

const NavBar = (props) => (
  <Box width="100%" boxSizing="border-box">
    <Flex p={3} backgroundColor="rgb(16, 15, 18)" justifyContent="space-between">
      <RocketSeatLogo src="https://rocketseat.com.br/static/images/experience/logo.svg" alt="Logo RSXP"/>
      <ShaweeLogo src="https://shawee.io/images/logo.svg" alt="Logo Shawee" />
      <Button onClick={props.openModal}>Novo post</Button>
    </Flex>
  </Box>
);

export default NavBar;
