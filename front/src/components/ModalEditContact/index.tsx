import { SubmitHandler, useForm } from "react-hook-form";
import { useContact } from "../../hooks/useContact";
import {
  TContactUpdate,
  contactSchemaUpdate,
} from "../../schemas/contactValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { InputMain } from "../../styles/Inputs";
import { ButtonBrandSecondary } from "../../styles/Buttons";
import { HeaderModal } from "../HeaderModal";

interface IModalCreateContactProps {
  toggleModal: () => void;
  contactId: number;
}

export const ModalEditContact = ({
  toggleModal,
  contactId,
}: IModalCreateContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactUpdate>({
    resolver: zodResolver(contactSchemaUpdate),
  });

  const { updateContact, contact } = useContact();

  console.log(contact);

  const submit: SubmitHandler<TContactUpdate> = async (data) => {
    updateContact(data, contactId);
  };

  return (
    <Modal toggleModal={toggleModal}>
      <HeaderModal toggleModal={toggleModal}>
        <h1>Edit Contact</h1>
      </HeaderModal>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="full-name">full name*</label>
        <InputMain
          type="text"
          id="full-name"
          defaultValue={contact?.full_name}
          {...register("full_name")}
        />

        <label htmlFor="email">email</label>
        <InputMain
          type="email"
          id="email"
          defaultValue={contact?.emails[0]}
          {...register("emails.0")}
        />
        {errors.emails?.message}

        <label htmlFor="email-2">email secondary</label>
        <InputMain
          type="email"
          id="email-2"
          defaultValue={contact?.emails[1]}
          {...register("emails.1")}
        />

        <label htmlFor="phone">phone*</label>
        <InputMain
          type="number"
          id="phone"
          defaultValue={contact?.phone[0]}
          {...register("phone.0")}
        />

        <label htmlFor="phone-2">phone secondary</label>
        <InputMain
          type="number"
          id="phone-2"
          defaultValue={contact?.phone[1]}
          {...register("phone.1")}
        />

        <ButtonBrandSecondary type="submit">Confirm</ButtonBrandSecondary>
      </form>
    </Modal>
  );
};
