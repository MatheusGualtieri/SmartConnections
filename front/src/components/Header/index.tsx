import { useAuth } from "../../hooks/useAuth";
import { ButtonA, ButtonNegative } from "../../styles/Buttons";
import { StyledH1, StyledText1 } from "../../styles/Fonts";
import { StyledContainer, StyledHeader } from "./style";

interface IHeaderProps {
  toggleModal: () => void;
}

export const Header = ({ toggleModal }: IHeaderProps) => {
  const { logout, user } = useAuth();
  return (
    <StyledHeader>
      <div>
        <StyledH1>{user?.full_name}</StyledH1>
        <StyledText1>{user?.email_login}</StyledText1>
      </div>
      <nav>
        <ButtonA href="#contacts">My Contacts</ButtonA>
        <ButtonA onClick={toggleModal}>Edit Profile</ButtonA>
        <ButtonNegative type="button" onClick={logout}>
          Logout
        </ButtonNegative>
      </nav>
    </StyledHeader>
  );
};
