import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.4s;

  &:hover {
    background-color: #45a049;
  }
`;

const Button = ({ children, onClick, style, disabled }) => {
  return (
    <StyledButton onClick={onClick} style={style} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default Button;
