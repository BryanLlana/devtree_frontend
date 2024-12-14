import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <h1 className="text-4xl text-white font-bold">Iniciar sesión</h1>

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
