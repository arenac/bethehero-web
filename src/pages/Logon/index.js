import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, LogoImage, Form, Image } from './styles';

import Button from '../../common/Button';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <Container>
      <section>
        <LogoImage src={logoImg} alt="Be The Hero" />

        <Form action="">
          <h1>Login</h1>
          <input placeholder="Your ID" />
          <Button type="submit" text="Enter">
            Enter
          </Button>
          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Create account
          </a>
        </Form>
      </section>

      <Image src={herosImg} alt="Heroes" />
    </Container>
  );
}
