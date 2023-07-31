import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { TUser } from "../schemas/userValidator";
import {
  TContact,
  TContactRequest,
  TContactUpdate,
} from "../schemas/contactValidator";
import { useAuth } from "../hooks/useAuth";

interface IContactProviderProps {
  children: ReactNode;
}

interface IContactProvider {
  listContact: () => Promise<void>;
  createContact: (data: TContactRequest) => Promise<void>;
  updateContact: (data: TContactUpdate, contactId: number) => Promise<void>;
  deleteContact: (contactId: number) => Promise<void>;
  contacts: TContact[] | undefined;
  setContact: React.Dispatch<
    React.SetStateAction<
      | {
          id: number;
          full_name: string;
          emails: string[];
          createdAt: string;
          phone: [any, ...any[]];
        }
      | undefined
    >
  >;
  contact:
    | {
        id: number;
        full_name: string;
        emails: string[];
        createdAt: string;
        phone: [any, ...any[]];
      }
    | undefined;
}

export const ContactContext = createContext({} as IContactProvider);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const [contacts, setContacts] = useState<TContact[] | undefined>();
  const [contact, setContact] = useState<TContact | undefined>();
  const { user } = useAuth();
  const userId: number = user
    ? user.id
    : Number(localStorage.getItem("smart-connections:userId"));

  const listContact = async () => {
    try {
      const response = await api.get(`users/${userId}/contacts`);
      console.log(userId);
      console.log(response);
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createContact = async (data: TContactRequest) => {
    try {
      const phonesNumber = data.phone.map((number) => Number(number));
      const newContact = { ...data, phone: phonesNumber };
      await api.post<TContact>(`users/${userId}/contacts`, newContact);
      listContact();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (data: TContactUpdate, contactId: number) => {
    try {
      let newContact: any = data;
      if (data.phone) {
        const phonesNumber = data.phone.map((number) => Number(number));
        newContact = { ...data, phone: phonesNumber };
      }

      await api.patch<TContact>(
        `users/${userId}/contacts/${contactId}`,
        newContact
      );
      listContact();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (contactId: number) => {
    try {
      await api.delete<TUser>(`users/${userId}/contacts/${contactId}`);
      listContact();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        createContact,
        deleteContact,
        listContact,
        updateContact,
        contacts,
        contact,
        setContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
