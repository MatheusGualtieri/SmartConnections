import styled from "styled-components";

export const ContactInformation = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardColor = styled.div`
  background-color: var(--brand-1);
  width: 20px;
  height: 100%;
  border-radius: var(--border-radius-1) 0 0 var(--border-radius-1);
  transition: 0.5s;
`;

export const CardData = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  padding-right: 1rem;
`;

export const StyledCard = styled.li`
  height: 250px;
  width: 100%;
  max-width: 400px;
  display: flex;
  gap: 1rem;
  border: 1px solid var(--brand-1);
  border-left: none;
  border-radius: var(--border-radius-1);
  transition: 0.5s;
  &:hover {
    border-color: var(--brand-2);
    background-color: var(--grey-5);
  }
  &:hover ${CardColor} {
    background-color: var(--brand-2);
  }
`;
export const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 45%;
    height: 35px;
  }
`;
