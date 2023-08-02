import React from "react";

const reservationUserAssets = () => {
  return <h1> SOY RESERVATION USER ASSETS </h1>;
};

export default reservationUserAssets;

// maneja los cambios en los campos de entrada de un formulario
// const handleChange = (event) => {
//   const { name, value } = event.target;
//   setUserProfile((prevProfile) => ({
//     ...prevProfile,
//     [name]: value,
//   }));
// };
// //maneja el evento del boton guardar
// const handleSubmit = async (e) => {
//   e.preventDefault(); // Evita el comportamiento predeterminado del formulario

//   try {
//     if (authToken) {
//       // Realiza la actualización del perfil del usuario en la base de datos
//       await updateProfile(authToken, userProfile);
//       console.log("Perfil de usuario actualizado exitosamente.");
//       toast.success("Sus datos han sido actualizados correctamente");
//     }
//   } catch (error) {
//     console.error("Error al actualizar el perfil de usuario:", error);
//     toast.error("No ha sido posible modificar sus datos");
//   }
// };
