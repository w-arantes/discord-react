import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text channels</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="free chat" />
      <ChannelButton channelName="projects" />
      <ChannelButton channelName="classes" />
      <ChannelButton channelName="technical info" />
      <ChannelButton channelName="documentation" />
    </Container>
  );
};

export default ChannelList;
