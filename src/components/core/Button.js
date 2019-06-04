import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ height }) => height ? css`height: ${height}` : ''};
  ${({ width }) => width ? css`width: ${width}` : ''};
  border: 4px solid #333;
  padding: 16px 28px;
  background: white;
`;
