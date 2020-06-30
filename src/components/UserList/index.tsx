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
      <UserRow nickname="Andrew Clark" />
      <UserRow nickname="Brian Vaughn" />
      <UserRow nickname="Dan Abramov" />
      <UserRow nickname="Dominic Gannaway" />
      <UserRow nickname="Luna Ruan" />
      <UserRow nickname="Rachel Nabors" />
      <UserRow nickname="Sebastian Markbåge" />
      <UserRow nickname="Yuzhi Zheng" />
      <UserRow nickname="Almero Steyn" />
      <UserRow nickname="Andreas Svensson" />
      <UserRow nickname="Alex Krolick" />
      <UserRow nickname="Alexey Pyltsyn" />
      <UserRow nickname="Brandon Dail" />
      <UserRow nickname="Caleb Meredith" />
      <UserRow nickname="Chang Yan" />
      <UserRow nickname="Cheng Lou" />
      <UserRow nickname="Christoph Nakazawa" />
    </Container>
  );
};

export default UserList;
