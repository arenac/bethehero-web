import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, LogoImage, Form, Image } from './styles';

import Button from '../../common/Button';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('session', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (error) {
      console.log('Error during the login.');
    }
  }

  return (
    <Container>
      <section>
        <LogoImage src={logoImg} alt="Be The Hero" />

        <Form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            placeholder="Your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button type="submit" text="Enter" />
          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Create account
          </Link>
        </Form>
      </section>

      <Image src={herosImg} alt="Heroes" />
    </Container>
  );
}
