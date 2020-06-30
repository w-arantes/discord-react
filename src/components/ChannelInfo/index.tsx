import React from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Chat</Title>

      <Separator />

      <Description>Channel open to chat and discuss about React.Js</Description>
    </Container>
  );
};

export default ChannelInfo;
