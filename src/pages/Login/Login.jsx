import React, { useEffect, useState } from "react";
// import Slider from "../../components/slider";
import Logo from "../../assets/images/logo-4.png";
import { login } from "../../services/auth.service";
import { login as loginStore } from "../../redux/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  //HOOKS

  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState({
    credentials: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(user)
      .then((response) => {
        setToken(response.token);
        console.log(setToken)
        setUser(response.data);
        console.log(setUser)
      })
      .catch((error) => {
        setUserError({ credentials: "Error en el inicio de sesión" + error });
        toast.error("No ha sido posible iniciar sesion");
      });
  };

  useEffect(() => {
    if (token && user) {
      console.log(user, token);
      try {
        dispatch(
          loginStore({
            token: token,
            id: user.id,
            email: user.email,
            role_id: user.role_id,
            name: user.name,
            surname: user.surname,
          })
        );
        toast.success("Bienvenido " + user.name);
        setTimeout(() => {
          navigate("/personalArea");
        }, 1000);
      } catch (error) {
        console.log("Error con user", error);
      }
    }
  }, [token, dispatch, navigate]);

  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row">
        {/* Left column container */}
        {/* <Slider></Slider> */}
        {/* Right column container */}
        <div className="px-4 md:px-0 lg:w-6/12">
          <div className="md:mx-6 md:p-12">
            {/* LOGO */}
            <div className="logoLogin">
              <img className="mx-auto w-9/12" src={Logo} alt="logo" />
            </div>
            {/* FORM */}
            <span className="text-2xl text-secondary-100 font-medium">
              Inicia Sesión o{" "}
              <a
                href="#"
                className="text-secondary-400 hover:underline"
                onClick={() => navigate("/register")}
              >
                Registrate
              </a>
            </span>
            <div className="mt-12 ">
              <form>
                <p className="loginForm mb-4">EMAIL</p>
                <input
                  value={user.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Escribe tu email"
                  className="AT-input mb-8"
                />
                <p className="loginForm mb-4">CONTRASEÑA</p>
                <input
                  value={user.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Escribe tu contraseña"
                  className="AT-input"
                />
              </form>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            {/* Submit button */}
            <div className="max-w-lg flex justify-center md:justify-end items-center ml-8 md:ml-44">
              <button
                className="loginButton"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Entrar
              </button>
              <a
                href="#"
                className="text-secondary-100 font-medium hover:text-secondary-100 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            {userError?.credentials ? (
              <div>{userError.credentials}</div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
