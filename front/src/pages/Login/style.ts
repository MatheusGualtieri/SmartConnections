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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100%;
    width: 40%;
  }
  @media (min-width: 900px) {
    gap: 2rem;
  }
`;

export const LogoStyled = styled.div`
  height: 100px;
  width: 80%;
  background-image: url("assets/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (min-width: 900px) {
    height: 150px;
  }
`;

export const CellphoneImage = styled.div`
  height: 55%;
  width: 70%;
  background-image: url("assets/cellphone.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (min-width: 1000px) {
    width: 90%;
  }
`;

export const BackgroundImage = styled.div`
  position: fixed;
  bottom: -65px;
  width: 100%;
  height: 200px;
  background-image: url("assets/stampHorizontal.png");
  background-repeat: repeat-x;
  background-position: center;
  background-size: contain;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const StyledLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LoginContainer = styled.div`
  max-width: 400px;
  width: 100%;
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

export const LoginHeader = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-4);
  @media (min-width: 800px) {
    display: none;
  }
`;

export const HeaderLogo = styled.div`
  width: 100%;
  height: 60%;
  background-image: url("assets/logoMobile.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
