import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TRegister } from "../schema";
import TextInput from "../../../common/components/TextInput";
import Button from "../../../common/components/Button";
import { useRegisterUser } from "../hooks/useRegisterUser";

const RegisterPage = () => {
  const RegisterUser = useRegisterUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const registerUser = (values: TRegister) => {
    RegisterUser.handle({
      payload: values,
    }).then((isOk) => {
      if (isOk) {
        reset();
      }
    });
  };

  return (
    <>
      <h1 className="text-4xl text-white font-bold">Crear cuenta</h1>
      <form
        onSubmit={handleSubmit(registerUser)}
        className="bg-white px-5 py-5 rounded-lg space-y-7 mt-5"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Nombre"
              placeholder="Ejm: Bryan Joseph"
              field={field}
              msgError={errors.name?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Email"
              placeholder="Ejm: bryan@gmail.com"
              field={field}
              typeInput="email"
              msgError={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Contraseña"
              placeholder="Ejm: ***********"
              typeInput="password"
              field={field}
              msgError={errors.password?.message}
            />
          )}
        />

        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Repetir password"
              placeholder="Ejm: ***********"
              typeInput="password"
              field={field}
              msgError={errors.passwordConfirmation?.message}
            />
          )}
        />

        <Button value="Crear cuenta" loading={RegisterUser.loading} />
      </form>
      <nav className="mt-10">
        <Link className="text-center text-white text-lg block" to="/auth/login">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  );
};

export default RegisterPage;
