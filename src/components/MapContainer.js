/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const MapContainer = ({ children }) => {
  return <div css={BoardMap}>{children}</div>;
};

export default MapContainer;

const BoardMap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1120px;
  padding: 100px;
  border-top: 1px solid gray;
  margin: 0 auto;
`;
