import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProject from "../../components/CardProjects";
import { getAllProjects } from "../../services/project.service";
import { getMeProjects } from "../../services/user.service";
import Loading from "../../components/Loading";

const Projects = () => {
  const authToken = useSelector((state) => state.user.credentials.token);
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAllProjects();
  }, [authToken]);

  const fetchAllProjects = async () => {
    setIsLoading(true)
    setProjectList([]);
    try {
      // Obtener las citas del usuario utilizando el token del estado de Redux
      const projectList = await getAllProjects(authToken);
      if (projectList.data) {
        setProjectList(projectList.data);
      }
      console.log(projectList);
    } catch (error) {
      console.log("Error al obtener todos los proyectos", error);
    } finally {
      setIsLoading(false)
    }
  };

  const fetchMeProjects = async () => {
    setIsLoading(true)
    setProjectList([]);
    try {
      // Obtener las citas del usuario utilizando el token del estado de Redux
      const meProjects = await getMeProjects(authToken);
      if (meProjects) {
        // Utilizando map() para extraer todos los proyectos en una lista de listas
        const allMeProjects = meProjects.flatMap((obj) => obj.projects);
        setProjectList(allMeProjects);
      }
    } catch (error) {
      console.log("Error al obtener todos los proyectos", error);
    } finally {
      setIsLoading(false)
    }
  };

  const handleFilter = (type) => {
    if (type == "all-projects") {
      fetchAllProjects();
    }
    if (type == "my-projects") {
      fetchMeProjects();
    }
  };

  return (
    <>
      <div className="flex flex-row gap-2 mb-4 justify-center md:justify-end">
        <button
          onClick={() => handleFilter("all-projects")}
          type="button"
          className="inline-block rounded bg-secondary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary"
        >
          Proyectos
        </button>
        <button
          onClick={() => handleFilter("my-projects")}
          type="button"
          className="inline-block rounded bg-secondary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary"
        >
          Mis proyectos
        </button>
      </div>
      {/* IS LOADING */}
      {isLoading && <Loading />}
      {/* CARDS */}
      <div className="flex hover flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 justify-center">
        {projectList.map((project) => (
          <CardProject
            key={project.id}
            name={project.name}
            description={project.description}
            place={project.place}
            start_date={project.start_date}
            end_date={project.end_date}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
