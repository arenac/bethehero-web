import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import {
  Container,
  Content,
  Section,
  Logo,
  Form,
  InputContainer,
} from './styles';

import Button from '../../common/Button';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('ONG');
  const [email, setEmail] = useState('ong@email.com');
  const [whatsapp, setWhatsapp] = useState('123456');
  const [city, setCity] = useState('Here');
  const [country, setCountry] = useState('LA');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      country,
    };

    console.log(data);

    const response = await api.post('/ongs', data);

    alert(response);
  }

  return (
    <Container>
      <Content>
        <Section>
          <Logo src={logoImg} alt="Be The Hero" />

          <h1>Register</h1>
          <p>Create your account and help people find your ONG.</p>
          <Link to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Login
          </Link>
        </Section>
        <Form onSubmit={handleSubmit}>
          <input
            placeholder="ONG name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <InputContainer>
            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="CO"
              style={{ width: 80 }}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </InputContainer>
          <Button type="submit" text="Register" />
        </Form>
      </Content>
    </Container>
  );
}
