import styled, { css } from 'styled-components';

export const FixedContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Flex = styled.div`
  display: flex;
  ${({ justify }) => justify ? css`justify-content: ${justify}` : ''};
  ${({ column }) => column ? css`flex-direction: column` : ''};
  ${({ align }) => align ? css`align-items: ${align}` : ''};
`;

export const Space = styled.div`
  width: 100%;
  height: ${({ height = '0px' }) => height };
`;
