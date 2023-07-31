import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  nav {
    width: 100%;
    align-items: center;
    height: 60px;
    display: flex;
    padding: 1rem;
    border-bottom: 2px solid var(--brand-1);
  }
  div {
    padding: 1rem;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 800px) {
    height: 80px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--brand-1);
    nav {
      width: 45%;
      gap: 1rem;
      border: none;
    }
    div {
      height: 100%;
    }
  }
`;

export const StyledContainer = styled.div`
  @media (min-width: 800px) {
    margin: 0 100px;
  }
`;
