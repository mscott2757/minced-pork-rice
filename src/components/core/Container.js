import styled from 'styled-components';

export const FixedContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Space = styled.div`
  width: 100%;
  height: ${({ height = '0px' }) => height };
`;
