import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--brand-1);
`;

export const LoginSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: var(--grey-4);
  @media (min-width: 800px) {
    height: 100%;
    width: 60%;
  }
`;

export const LogoSection = styled.section`
  display: none;
  @media (min-width: 800px) {
    background-color: var(--grey-4);
    display: flex;
    height: 100%;
    width: 40%;
  }
`;

export const StyledLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LoginContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    max-width: 400px;
    width: 80%;
  }
`;
