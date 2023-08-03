import { useContact } from "../../hooks/useContact";
import { TContact } from "../../schemas/contactValidator";
import { ButtonBrandSecondary, ButtonNegative } from "../../styles/Buttons";
import { StyledText1, StyledText2 } from "../../styles/Fonts";
import {
  ButtonsDiv,
  CardColor,
  CardData,
  ContactInformation,
  StyledCard,
} from "./style";

interface ICardProps {
  contact: TContact;
  toggleModal: () => void;
}

export const Card = ({ contact, toggleModal }: ICardProps) => {
  const { setContact, deleteContact } = useContact();
  return (
    <StyledCard>
      <CardColor />
      <CardData>
        <ContactInformation>
          <StyledText1>{contact.full_name}</StyledText1>
          {contact.emails.map((email) => (
            <StyledText2>{email}</StyledText2>
          ))}
          {contact.phone.map((number) => (
            <StyledText2>{number}</StyledText2>
          ))}
        </ContactInformation>
        <ButtonsDiv>
          <ButtonBrandSecondary
            type="button"
            onClick={() => {
              toggleModal();
              setContact(contact);
              console.log(contact);
            }}
          >
            Edit
          </ButtonBrandSecondary>
          <ButtonNegative
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </ButtonNegative>
        </ButtonsDiv>
      </CardData>
    </StyledCard>
  );
};
