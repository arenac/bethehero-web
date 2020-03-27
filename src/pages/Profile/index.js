import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, Header, Button, Title, List } from './styles';

import ListItem from '../../common/ListItem';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Welcome</span>
        <Button to="/incidents/new">New case</Button>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>
      <Title>Cases</Title>
      <List>
        <ListItem
          caseName="Case Test"
          description="description test"
          value={100}
          handleClick={() => {}}
        />
        <ListItem
          caseName="Case Test"
          description="description test"
          value={100}
          handleClick={() => {}}
        />
        <ListItem
          caseName="Case Test"
          description="description test"
          value={100}
          handleClick={() => {}}
        />
        <ListItem
          caseName="Case Test"
          description="description test"
          value={100}
          handleClick={() => {}}
        />
      </List>
    </Container>
  );
}
