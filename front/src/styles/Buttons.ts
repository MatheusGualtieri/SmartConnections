import styled from "styled-components";

export const ButtonBrand = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--grey-4);
  border: 2px solid var(--grey-4);
  border-radius: var(--border-radius-1);
  font-size: var(--font-size-2);
  transition: 0.5s;

  :hover {
    background-color: var(--grey-4);
    color: var(--brand-1);
  }
`;

export const ButtonBrandSecondary = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: var(--brand-1);
  color: var(--grey-4);
  border: 2px solid var(--brand-1);
  border-radius: var(--border-radius-1);
  font-size: var(--font-size-2);
  transition: 0.5s;

  :hover {
    background-color: var(--brand-2);
  }
`;

export const ButtonNegative = styled.button`
  height: 30px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--negative);
  border: 2px solid var(--negative);
  border-radius: var(--border-radius-1);
  font-size: var(--font-size-2);
  transition: 0.5s;

  :hover {
    background-color: var(--grey-4);
    color: var(--brand-1);
  }
`;

export const ButtonA = styled.a`
  width: 100%;
  padding: 0.5rem 1rem;
  color: var(--grey-2);
  font-size: var(--font-size-2);
  transition: 0.5s;

  :hover {
    color: var(--brand-1);
  }
`;
