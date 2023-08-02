import React from "react";

const CardTeams = ({ name, users = [] }) => {

return (
    <>
<div className="flex flex-col rounded-lg bg-white hover:bg-gray-100 cursor-pointer transition-colors duration-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">

        <div className="flex flex-col justify-start p-6">
          {/*NAME  */}
          <p className="mb-2 text-xl font-bold text-neutral-800 dark:text-neutral-50">
          <b>Equipo: </b>
            <span className="">{name}</span>
          </p>
          {/*USERS  */}
          {users.map((user) => (
            <div key={user.id}>{user.name} {user.surname}</div>
          ))} 
        </div>
      </div>
    </>
);
};

export default CardTeams;
