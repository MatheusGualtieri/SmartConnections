import styled from "styled-components";

export const StyledSignupPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  background-color: var(--brand-1);
  color: var(--grey-4);
`;

export const StyledSignupForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SignupContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    width: 80%;
  }
`;

export const BackgroundImageLeft = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    position: fixed;
    top: 0;
    left: -78px;
    width: 200px;
    height: 100%;
    background-image: url("assets/stampVertical.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const BackgroundImageRight = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    position: fixed;
    top: 0;
    right: -78px;
    width: 200px;
    height: 800px;
    background-image: url("assets/stampVertical.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;
