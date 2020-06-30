import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Online - 1</Role>
      <UserRow nickname="Wellington Arantes" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Elliot Alderson" isBot />
    </Container>
  );
};

export default UserList;
