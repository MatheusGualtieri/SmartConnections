import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-4);
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  width: 100%;
  button {
    width: fit-content;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  li {
    padding: 1.5rem;
    height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    border: 2px solid var(--brand-1);
    border-radius: var(--border-radius-1);
  }
  @media (min-width: 800px) {
    flex-wrap: nowrap;
    li {
      max-width: 300px;
    }
  }
`;
