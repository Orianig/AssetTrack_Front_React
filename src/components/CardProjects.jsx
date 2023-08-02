import React from "react";

const CardProject = ({ name, place, description, end_date, start_date }) => {
  return (
      <div className="flex flex-col rounded-lg bg-white hover:bg-gray-100 cursor-pointer transition-colors duration-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        {/* a posterior debo traerme las imagenes desde el back */}
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          {/*NAME  */}
          <p className="mb-2 text-xl font-bold text-neutral-800 dark:text-neutral-50">
            <span className="">{name}</span>
          </p>
          {/*DESCRIPTION  */}
          <p className="mb-2 text-xl font-normal text-neutral-800 dark:text-neutral-50">
            <span className="">{description}</span>
          </p>
          {/*PLACE  */}
          <p className="mb-2 text-xl font-normal text-neutral-800 dark:text-neutral-50">
            <span className="">{place}</span>
          </p>
          {/*DATE  */}
          <div className="flex flex-row space-x-8 justify-center">
            <p className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              <span className="">{start_date}</span>
            </p>
            <p className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              <span className="">{end_date}</span>
            </p>
          </div>
        </div>
      </div>
  );
};
export default CardProject;
