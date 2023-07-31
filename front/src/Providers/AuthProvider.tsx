import { ReactNode, createContext, useEffect, useState } from "react";
import { TLogin } from "../schemas/loginValidator";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import { TUser, TUserResponse } from "../schemas/userValidator";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthProvider {
  signIn: (data: TLogin) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => Promise<void>;
  user: TUserResponse | undefined;
  setUser: React.Dispatch<
    React.SetStateAction<
      | {
          email_login: string;
          id: number;
          full_name: string;
          emails: string[];
          createdAt: string;
          phone: [any, ...any[]];
          contacts: {
            id: number;
            full_name: string;
            emails: string[];
            createdAt: string;
            phone: [any, ...any[]];
          }[];
        }
      | undefined
    >
  >;
}

interface ILoginResponse {
  token: string;
  user: TUser;
}

export const AuthContext = createContext({} as IAuthProvider);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<TUserResponse>();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("smart-connections:token");

    if (!token) {
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: TLogin) => {
    try {
      const response = await api.post<ILoginResponse>("login", data);

      const { token, user } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("smart-connections:token", token);
      localStorage.setItem("smart-connections:userId", String(user.id));
      setLoading(false);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    localStorage.removeItem("smart-connections:token");
    localStorage.removeItem("smart-connections:userId");
    setUser(undefined);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ signIn, loading, setLoading, logout, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
