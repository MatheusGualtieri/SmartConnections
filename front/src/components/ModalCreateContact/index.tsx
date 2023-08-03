import { SubmitHandler, useForm } from "react-hook-form";
import { useContact } from "../../hooks/useContact";
import {
  TContactRequest,
  contactSchemaRequest,
} from "../../schemas/contactValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { InputMain } from "../../styles/Inputs";
import { ButtonBrandSecondary } from "../../styles/Buttons";
import { HeaderModal } from "../HeaderModal";

interface IModalCreateContactProps {
  toggleModal: () => void;
}

export const ModalCreateContact = ({
  toggleModal,
}: IModalCreateContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactRequest>({
    resolver: zodResolver(contactSchemaRequest),
  });

  const { createContact } = useContact();

  const submit: SubmitHandler<TContactRequest> = async (data) => {
    createContact(data);
  };

  console.log(errors);

  return (
    <Modal toggleModal={toggleModal}>
      <HeaderModal toggleModal={toggleModal}>
        <h1>Create Contact</h1>
      </HeaderModal>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="full-name">full name*</label>
        <InputMain type="text" id="full-name" {...register("full_name")} />

        <label htmlFor="email">email</label>
        <InputMain type="email" id="email" {...register("emails.0")} />

        <label htmlFor="email-2">email secondary</label>
        <InputMain type="email" id="email-2" {...register("emails.1")} />

        <label htmlFor="phone">phone*</label>
        <InputMain type="number" id="phone" {...register("phone.0")} />

        <label htmlFor="phone-2">phone secondary</label>
        <InputMain type="number" id="phone-2" {...register("phone.1")} />

        <ButtonBrandSecondary type="submit">Confirm</ButtonBrandSecondary>
      </form>
    </Modal>
  );
};
