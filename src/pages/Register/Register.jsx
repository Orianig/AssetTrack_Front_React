import React, { useState } from "react";
import Slider from "../../components/slider.jsx";
import Logo from "../../assets/images/logo-4.png";
import { register } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  //HOOKS

  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

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
    register(user)
      .then((result) => {
        toast.success(user.name + " te haz registrado con exito");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error("No se han cumplido los parametros necesarios");
      });
  };
  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row">
                {/* Left column container */}
                <Slider></Slider>

        {/* Right column container */}
        <div className="px-4 md:px-0 lg:w-6/12">
          <div className="md:mx-6 md:p-12">
            {/* LOGO */}
            <div className="logoLogin mb-6">
              <img className="mx-auto w-9/12 " src={Logo} alt="logo" />
            </div>
            {/* FORM */}
            <span className="text-2xl text-secondary-100 font-medium">
              Registrado?{" "}
              <a
                href="#"
                className="text-secondary-400 hover:underline"
                onClick={() => navigate("/")}
              >
                Inicia Sesión
              </a>
            </span>
            <div className="mt-6">
              <form>
                <p className="loginForm mb-0">NOMBRE</p>
                <input
                  value={user.name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Escribe tu nombre"
                  className="AT-input mb-4"
                />
                <p className="loginForm mb-0">APELLIDO</p>
                <input
                  value={user.surname}
                  onChange={handleChange}
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Escribe tu apellido"
                  className="AT-input mb-4"
                />
                <p className="loginForm mb-0">EMAIL</p>
                <input
                  value={user.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Escribe tu email"
                  className="AT-input mb-4"
                />
                <p className="loginForm mb-0">CONTRASEÑA</p>
                <input
                  value={user.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Escribe tu contraseña"
                  className="AT-input"
                />
              </form>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            {/* Submit button */}
            <div className="max-w-lg flex justify-center md:justify-end items-center ml-8 md:ml-44">
              <button
                className="loginButton "
                type="button"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
