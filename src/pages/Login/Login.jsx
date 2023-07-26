import React, { useEffect, useState } from "react";
import Bg1 from "../../assets/images/login-1.jpg";
import Bg2 from "../../assets/images/login-2.jpg";
import Bg3 from "../../assets/images/login-3.jpg";
import Bg4 from "../../assets/images/login-4.jpg";
import Logo from "../../assets/images/logo-4.png";
// import { login } from "../../services/auth.service";
// import { login as loginStore } from "../../redux/slices/user.slice";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import jwtDecode from "jwt-decode";

const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Bg1, Bg2, Bg3, Bg4];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row">
        {/* Left column container */}

        {/* Carousel */}

        <div className="slider ">
          <div className="h-screen relative overflow-hidde">
            {images.map((imageUrl, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } transition-opacity duration-700 ease-in-out absolute h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
              >
                <img
                  src={imageUrl}
                  className="block w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="buttonLeft"
            onClick={handlePrevSlide}
          >
            &lt;
          </button>
          <button
            type="button"
            className="buttonRight"
            onClick={handleNextSlide}
          >
            &gt;
          </button>
          {/* Slider indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-gray-500"
                }`}
                aria-current={index === currentSlide ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Right column container */}

        <div className="px-4 md:px-0 lg:w-6/12">
          <div className="md:mx-6 md:p-12">
            {/* LOGO */}
            <div className="logoLogin">
              <img className="mx-auto w-9/12" src={Logo} alt="logo" />
            </div>
            {/* FORM */}
            <span className="text-2xl text-secondary-300 font-medium">
              Inicia Sesión o{" "}
              <a
                href="#"
                className="text-secondary-100 hover:underline"
                // onClick={() => navigate("/register")}
              >
                Registrate
              </a>
            </span>
            <div className="mt-12">
              <form>
                <p className="loginForm mb-4">EMAIL</p>
                <input
                  type="email"
                  placeholder="Escribe tu email"
                  className="AT-input mb-8"
                />
                <p className="loginForm mb-4">CONTRASEÑA</p>
                <input
                  type="password"
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
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Entrar
              </button>
              <a
                href="#"
                className="text-secondary-300 font-medium hover:text-secondary-100 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
