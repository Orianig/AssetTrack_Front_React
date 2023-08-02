import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserProfile, updateProfile } from "../../services/user.service";
import CustomButton from "../../components/CustomButton";

const Profile = () => {
  // //HOOKS
  const [userProfile, setUserProfile] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    dni: "",
    birthdate: "",
    gender: "",
    employee_number: "",
    category: "",
  });

  const authToken = useSelector((state) => state.user.credentials.token);
  console.log(authToken);
  const userRoleId = useSelector((state) => state.user.data.role_id);
  console.log(userRoleId);

  useEffect(() => {
    //obtiene el perfil de usuario
    const fetchUserProfile = async () => {
      try {
        if (authToken) {
          //paso el token como argumento y recibo los datos desde mi bbdd
          const userProfile = await getUserProfile(authToken);
          //obtengo los datos
          console.log(userProfile);
          //actualiza el estado local
          setUserProfile(userProfile.data);
          console.log(userProfile.data);
        }
      } catch (error) {
        console.error("Error retrieving user profile:", error);
      }
    };
    //  callback que se ejecuta después de que el componente se haya montado
    fetchUserProfile(); //fetch ==> obtener datos
  }, []); //solo se ejecuta una vez

  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-secondary-600 font-bold">
          PERFIL DE USUARIO
        </h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4 font-mulish text-secondary-600">
              <p>Nombre completo</p>
            </div>
          </div>
          {/* USER NAME */}
          <div className="inputProfile">
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="AT-inputProfile"
                  placeholder="Nombre"
                  name="name"
                  value={userProfile.name}
                  // onChange={handleChange}
                />
              </div>
              {/* LASTNAME */}
              <div className="w-full">
                <input
                  type="text"
                  className="AT-inputProfile"
                  placeholder="Apellido(s)"
                  name="lastName"
                  value={userProfile.surname}
                  // onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* PHONE NUMBER */}
          <div className="inputProfile">
            <div className="w-full md:w-1/4">
              <p>Número de contacto</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="AT-inputProfile"
                placeholder="Número de contacto"
                name="phoneNumber"
                value={userProfile.phone_number}
                // onChange={handleChange}
              />
            </div>
          </div>
          {/* DNI */}
          <div className="inputProfile">
            <div className="w-full md:w-1/4">
              <p>DNI</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="AT-inputProfile"
                placeholder="DNI/NIE"
                name="dni"
                value={userProfile.dni}
                // onChange={handleChange}
              />
            </div>
          </div>
          {/* BIRTHDATE */}
          <div className="inputProfile">
            <div className="w-full md:w-1/4">
              <p>Fecha de nacimiento</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="AT-inputProfile"
                placeholder="aaaa-mm-dd"
                name="birthdate"
                value={userProfile.birthdate}
                // onChange={handleChange}
              />
            </div>
          </div>
          {/* GENDER */}
          <div className="inputProfile">
            <div className="w-full md:w-1/4">
              <p>Género</p>
            </div>
            <div className="flex-1 ">
              <select
                className="AT-inputProfile"
                name="gender"
                value={userProfile.gender}
                // onChange={handleChange}
              >
                <option value="Null">-.-</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
            </div>
          </div>
          {/*EMPLOYEE NUMBER*/}
          <div className="inputProfile">
            <div className="w-full md:w-1/4">
              <p>Número de empleado</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="AT-inputProfile"
                placeholder="Número de colegiado"
                name="collegiateNumber"
                value={userProfile.employee_number}
                // onChange={handleChange}
              />
            </div>
          </div>
          {/* CATEGORY */}
          <div className="inputProfile">
            <div className="w-full md:w-1/4">
              <p>Categoria</p>
            </div>
            <div className="flex-1 ">
              <div className="flex-1">
                <input
                  type="text"
                  className="AT-inputProfile"
                  placeholder="Categoria"
                  name="Category"
                  value={userProfile.category}
                  // onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-end">
          {/* <CustomButton onClick={handleSubmit}>Guardar</CustomButton> */}
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-primary font-bold">USUARIO Y CONTRASEÑA</h1>
        <hr className="my-8 border-gray-500/30" />
        {/* Change password */}
        <form className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-600 text-xl mb-1 font-semibold">
                Correo electrónico
              </h5>
              <p className="text-gray-500 text-sm">{userProfile.email}</p>
            </div>
            <div>
              <CustomButton>Cambiar Correo</CustomButton>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-600 text-xl mb-1 font-semibold">
                Contraseña
              </h5>
              <p className="text-gray-500 text-sm">****************</p>
            </div>
            <div>
              <CustomButton>Cambiar Contraseña</CustomButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
