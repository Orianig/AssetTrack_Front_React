import React from "react";
import CustomButton from '../../components/CustomButton';
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateProfile } from "../../services/user.service";

const Profile = () => {

  //HOOKS 
  // const [userProfile, setUserProfile] = useState("");
  // const [user, setUser] = useState({});
  // const dispatch = useDispatch();

  const authToken = useSelector((state) => state.user.credentials.token);
  console.log(authToken)
  const userRoleId = useSelector((state) => state.user.data.role_id);
  console.log(userRoleId)
  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-primary font-bold">PERFIL DE USUARIO</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>Nombre completo</p>
            </div>
          </div>
          {/* USER NAME */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="AT-inputProfile"
                  placeholder="Nombre"
                  name="name"
                  // value={userProfile.name}
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
                  // value={userProfile.lastName}
                  // onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* PHONE NUMBER */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>Número de contacto</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="AT-inputProfile"
                placeholder="Número de contacto"
                name="phoneNumber"
                // value={userProfile.phoneNumber}
                // onChange={handleChange}
              />
            </div>
          </div>
          {/* DNI */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>DNI</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="AT-inputProfile"
                placeholder="DNI/NIE"
                name="dni"
                // value={userProfile.dni}
                // onChange={handleChange}
              />
            </div>
          </div>
          {/* BIRTHDATE */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>Fecha de nacimiento</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="AT-inputProfile"
                placeholder="aaaa-mm-dd"
                name="birthdate"
                // value={userProfile.birthdate}
                // onChange={handleChange}
              />
            </div>
          </div>
          {/* GENDER */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>Género</p>
            </div>
            <div className="flex-1 ">
              <select
                className="AT-inputProfile"
                name="gender"
                // value={userProfile.gender}
                // onChange={handleChange}
              >
                <option value="Null">-.-</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
            </div>
          </div>
          {/*EMPLOYEE NUMBER*/}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>Número de empleado</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="AT-inputProfile"
                placeholder="Número de colegiado"
                name="collegiateNumber"
                // value={userProfile.collegiateNumber}
                // onChange={handleChange}
              />
            </div>
          </div>
          {/* CATEGORY */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
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
                  // value={userProfile.collegiateNumber}
                  // onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-end">
          <CustomButton>Guardar</CustomButton>
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
              <p className="text-gray-500 text-sm">
        {/* {userProfile.collegiateNumber} */}
      </p>
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
