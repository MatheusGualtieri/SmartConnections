import { TUserRequest, userSchemaRequest } from "../../schemas/userValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router";
import { InputMain } from "../../styles/Inputs";
import { ButtonBrand } from "../../styles/Buttons";
import { SignupContainer, StyledSignupForm, StyledSignupPage } from "./style";
import { StyledH1 } from "../../styles/Fonts";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserRequest>({
    resolver: zodResolver(userSchemaRequest),
  });

  const { createUser } = useUser();

  const navigate = useNavigate();

  const submit: SubmitHandler<TUserRequest> = async (data) => {
    createUser(data);
    navigate("/");
  };

  return (
    <StyledSignupPage>
      <SignupContainer>
        <StyledH1>Create Account</StyledH1>
        <StyledSignupForm onSubmit={handleSubmit(submit)}>
          <label htmlFor="full-name">full name*</label>
          <InputMain type="text" id="full-name" {...register("full_name")} />

          <label htmlFor="email_login">email*</label>
          <InputMain
            type="email"
            id="email_login"
            {...register("email_login")}
          />

          <label htmlFor="email-2">email secondary</label>
          <InputMain type="email" id="email-2" {...register("emails.0")} />

          <label htmlFor="phone">phone*</label>
          <InputMain type="number" id="phone" {...register("phone.0")} />

          <label htmlFor="phone-2">phone secondary</label>
          <InputMain type="number" id="phone-2" {...register("phone.1")} />

          <label htmlFor="password">password*</label>
          <InputMain type="password" id="password" {...register("password")} />

          <ButtonBrand type="submit">Confirm</ButtonBrand>
        </StyledSignupForm>
        <ButtonBrand type="button" onClick={() => navigate("/")}>
          Go back to Login
        </ButtonBrand>
      </SignupContainer>
    </StyledSignupPage>
  );
};
