import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

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
        <Form>
          <input placeholder="ONG name" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />
          <InputContainer>
            <input placeholder="City" />
            <input placeholder="CO" style={{ width: 80 }} />
          </InputContainer>
          <Button
            type="submit"
            text="Register"
            handleClick={() => {
              alert('register');
            }}
          />
        </Form>
      </Content>
    </Container>
  );
}
