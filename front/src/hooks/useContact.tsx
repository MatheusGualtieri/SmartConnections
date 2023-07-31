import { useContext } from "react";
import { ContactContext } from "../Providers/ContactProvider";

export const useContact = () => {
  const contactContext = useContext(ContactContext);
  return contactContext;
};
