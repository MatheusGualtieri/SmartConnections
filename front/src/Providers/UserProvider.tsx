import { ReactNode, createContext } from "react";
import { api } from "../services/api";
import { TUserRequest, TUserUpdate } from "../schemas/userValidator";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserProvider {
  getUser: () => Promise<void>;
  createUser: (data: TUserRequest) => Promise<void>;
  updateUser: (data: TUserUpdate) => Promise<void>;
  deleteUser: () => Promise<void>;
}

export const UserContext = createContext({} as IUserProvider);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const { user, setUser } = useAuth();
  const userId: number = user
    ? user.id
    : Number(localStorage.getItem("smart-connections:userId"));

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await api.get(`users/${userId}`);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (data: TUserRequest) => {
    try {
      if (data.phone[1] === "0" || data.phone[1] == "") {
        data.phone.pop();
      }
      if (data.emails && data.emails[0] == "") {
        data.emails[0] = data.email_login;
      } else {
        data.emails?.unshift(data.email_login);
      }
      const phonesNumber = data.phone.map((number) => Number(number));
      const newUser = { ...data, phone: phonesNumber };
      const response = await api.post(`users`, newUser);
      setUser(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (data: TUserUpdate) => {
    try {
      let newUser = {};
      if (data.password == "") {
        delete data.password;
      }
      if (data.phone) {
        for (let i = 0; i < data.phone.length; i++) {
          if (data.phone[i] == "0" || data.phone[i] == "") {
            data.phone.splice(i);
          }
        }
        const phonesNumber = data.phone.map((number) => Number(number));
        newUser = { ...data, phone: phonesNumber };
      }
      if (data.emails) {
        for (let i = 0; i < data.emails.length; i++) {
          if (data.emails[i] == "0") {
            data.emails.splice(i);
          }
        }
      }
      newUser = data;
      console.log(newUser);
      const response = await api.patch(`users/${userId}`, newUser);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete(`users/${userId}`);
      setUser(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ getUser, createUser, updateUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
