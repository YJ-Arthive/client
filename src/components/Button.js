/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const button = css`
  width: 394px;
  height: 46px;
  background: #000;
  color: #ffffff;
  font-size: 18px;
  margin-top: 40px;
  border: none;
  cursor: pointer;
`;

const Button = ({ name }) => {
  return (
    <button css={button}>
      <span>{name}</span>
    </button>
  );
};

export default Button;
