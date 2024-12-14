import { Link } from "react-router-dom";
import Button from "../../../common/components/Button";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../../common/components/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, TLogin } from "../schema";
import { useLoginUser } from "../hooks/useLoginUser";

const LoginPage = () => {
  const LoginUser = useLoginUser();

  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (values: TLogin) => {
    LoginUser.handle({
      payload: values,
    }).then((isOK) => {
      if (isOK) {
        reset();
      }
    });
  };

  return (
    <>
      <h1 className="text-4xl text-white font-bold">Iniciar sesión</h1>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-5 py-5 rounded-lg space-y-7 mt-5"
      >
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

        <Button value="Iniciar sesión" loading={LoginUser.loading} />
      </form>

      <nav className="mt-10">
        <Link
          className="text-center text-white text-lg block"
          to="/auth/register"
        >
          ¿No tienes cuenta? Crea una aquí
        </Link>
      </nav>
    </>
  );
};

export default LoginPage;
