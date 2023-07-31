import { ReactNode, createContext } from "react";
import { api } from "../services/api";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdate,
} from "../schemas/userValidator";
import { useAuth } from "../hooks/useAuth";

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

  const getUser = async () => {
    try {
      const response = await api.get<TUserResponse>(`users/${userId}`);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (data: TUserRequest) => {
    try {
      const phonesNumber = data.phone.map((number) => Number(number));
      const newUser = { ...data, phone: phonesNumber };
      const response = await api.post<TUserResponse>(`users`, newUser);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (data: TUserUpdate) => {
    try {
      let newUser = data;
      if (data.phone) {
        const phonesNumber = data.phone.map((number) => Number(number));
        newUser = { ...data, phone: phonesNumber };
      }

      const response = await api.patch<TUserResponse>(
        `users/${userId}`,
        newUser
      );
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
