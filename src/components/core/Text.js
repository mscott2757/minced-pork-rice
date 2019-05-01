import styled, { css } from 'styled-components';

export const P = styled.p`
  padding: 0;
  margin: 0;
  font-family: Lato;
  font-size: 1em;
  line-height: 1.3;
  && {
    ${({ letterSpacing }) => letterSpacing ? css`letter-spacing: ${letterSpacing}` : ''};
    ${({ fontWeight }) => fontWeight ? css`font-weight: ${fontWeight}` : ''};
    ${({ fontStyle }) => fontStyle ? css`font-style: ${fontStyle}` : ''};
  }
`;

export const H1 = styled(P)`
  font-size: 3em;
`;

export const H2 = styled(P)`
  font-size: 2.25em;
`;

export const H3 = styled(P)`
  font-size: 1.75em;
`;

export const H4 = styled(P)`
  font-size: 1.125em;
`;

const serifStyle = css`
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: bold;
`;

export const SP = styled(P)`
  ${serifStyle};
`;

export const SH1 = styled(H1)`
  ${serifStyle};
`;

export const SH2 = styled(H2)`
  ${serifStyle};
`;

export const SH3 = styled(H3)`
  ${serifStyle};
`;

export const SH4 = styled(H4)`
  ${serifStyle};
`;
