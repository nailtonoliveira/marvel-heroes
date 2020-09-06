import React from 'react';

import { Container } from './styles';

interface LoaderProps {
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 56 }) => (
  <Container size={size} />
);

export default Loader;
