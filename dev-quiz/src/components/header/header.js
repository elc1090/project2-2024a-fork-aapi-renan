import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AppBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Score = styled.p`
  color: white;
  font-size: 16px;
  margin: 5px 0 0;
`;

const Header = ({ title, score }) => {
  return (
    <AppBar>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <Score>Score: {score}</Score>
    </AppBar>
  );
};

export default Header;
