import React from 'react';
import { Link } from 'react-router-dom';
import logoflix from '../../assets/logoflix.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../ButtonLink';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logoflix} alt="MiguelFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/register/video">
        Novo Vídeo
      </Button>
    </nav>
  );
};