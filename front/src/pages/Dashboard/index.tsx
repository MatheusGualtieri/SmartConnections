import { useEffect, useState } from "react";
import { useContact } from "../../hooks/useContact";
import { useUser } from "../../hooks/useUser";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { ModalCreateContact } from "../../components/ModalCreateContact";
import { ModalEditContact } from "../../components/ModalEditContact";
import { ModalEditProfile } from "../../components/ModalEditProfile";
import { StyledContainer, StyledList, StyledMain } from "./style";
import { ButtonBrandSecondary } from "../../styles/Buttons";
import { StyledH2 } from "../../styles/Fonts";

export const Dashboard = () => {
  const { getUser } = useUser();
  const { contacts, listContact, contact } = useContact();
  const [isOpenModalEditContact, setIsOpenModalEditContact] = useState(false);
  const [isOpenModalEditProfile, setIsOpenModalEditProfile] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      await getUser();
      await listContact();
    })();
  }, []);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const toggleModalEditContact = () => {
    setIsOpenModalEditContact(!isOpenModalEditContact);
  };

  const toggleModalProfile = () => {
    setIsOpenModalEditProfile(!isOpenModalEditProfile);
  };

  return (
    <>
      <Header toggleModal={toggleModalProfile} />
      <StyledMain>
        <StyledContainer>
          <ButtonBrandSecondary type="button" onClick={toggleModal}>
            Create Contacts
          </ButtonBrandSecondary>
          <StyledH2 id="contacts">My Contacts</StyledH2>
          <StyledList>
            {contacts?.map((contact) => (
              <Card
                toggleModal={toggleModalEditContact}
                key={contact.id + contact.full_name}
                contact={contact}
              />
            ))}
          </StyledList>
        </StyledContainer>
      </StyledMain>
      {isOpenModal && (
        <ModalCreateContact toggleModal={toggleModal}></ModalCreateContact>
      )}
      {isOpenModalEditContact && contact ? (
        <ModalEditContact
          toggleModal={toggleModalEditContact}
          contactId={contact!.id}
        ></ModalEditContact>
      ) : null}
      {isOpenModalEditProfile && (
        <ModalEditProfile toggleModal={toggleModalProfile}></ModalEditProfile>
      )}
    </>
  );
};
