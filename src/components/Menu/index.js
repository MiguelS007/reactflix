import React from 'react';
import logoflix from '../../assets/logoflix.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logoflix} alt="MiguelFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
};