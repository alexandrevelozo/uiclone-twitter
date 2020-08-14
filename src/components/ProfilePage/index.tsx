import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Alexandre Velozo</h1>
        <h2>@alexandre_velozo</h2>

        <p>
          Developer and CEO at <a href="https://rocketseat.com.br">AVZ Solutions
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 18 de janeiro de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
