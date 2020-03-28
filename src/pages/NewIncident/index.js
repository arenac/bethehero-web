import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Section, Logo, Form } from './styles';

import Button from '../../common/Button';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
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
        <Form>
          <input placeholder="Title" />
          <textarea placeholder="Description" />
          <input placeholder="Value in $" />

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
