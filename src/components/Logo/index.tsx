import React from 'react';
import { MdExplore } from 'react-icons/md';

import { Container } from './styles';

const Logo: React.FC = () => (
  <Container data-testid="logo-app">
    <MdExplore size={32} />
    <strong>Marvel Characters</strong>
  </Container>
);

export default Logo;
