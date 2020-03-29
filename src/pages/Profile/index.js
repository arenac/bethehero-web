import React, { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Header, Button, Title, List } from './styles';

import ListItem from '../../common/ListItem';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile() {
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      console.log('Error when deleting');
    }
  }

  function handleLogout() {
    localStorage.setItem('ongId', '');
    localStorage.setItem('ongName', '');
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Welcome, {ongName}</span>
        <Button to="/incidents/new">New case</Button>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>
      <Title>Cases</Title>
      <List>
        {incidents.map((incident) => (
          <ListItem
            key={incident.id}
            caseName={incident.title}
            description={incident.description}
            value={incident.value}
            handleClick={() => {
              handleDelete(incident.id);
            }}
          />
        ))}
      </List>
    </Container>
  );
}
