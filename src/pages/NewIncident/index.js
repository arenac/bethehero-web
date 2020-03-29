import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Section, Logo, Form } from './styles';

import Button from '../../common/Button';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push('/profile');
    } catch (error) {
      alert('Error when adding new incident');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <Logo src={logoImg} alt="Be The Hero" />

          <h1>Register a New case</h1>
          <p>Describe the case in details, so you will find a hero.</p>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Home
          </Link>
        </Section>
        <Form onSubmit={handleNewIncident} action="">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Value in $"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button type="submit" text="Register" />
        </Form>
      </Content>
    </Container>
  );
}
