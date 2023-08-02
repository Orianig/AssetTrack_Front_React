import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardTeams from "../../components/CardTeams";
import { getAllTeams } from "../../services/teams.service";
import Loading from "../../components/Loading";
import { getUserTeams } from "../../services/user.service";


const Teams = () => {
    const authToken = useSelector((state) => state.user.credentials.token);
    const [teamList, setTeamList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        fetchAllTeams();
    }, [authToken]);
  
    const fetchAllTeams = async () => {
      setIsLoading(true)
      setTeamList([]);
      try {
        // Obtener las citas del usuario utilizando el token del estado de Redux
        const teamList = await getAllTeams(authToken);
        if (teamList.data) {
            setTeamList(teamList.data);
        }
      } catch (error) {
        console.log("Error al obtener todos los proyectos", error);
      } finally {
        setIsLoading(false)
      }
    };
  
    const fetchMeTeams = async () => {
      setIsLoading(true)
      setTeamList([]);
      try {
        // Obtener las citas del usuario utilizando el token del estado de Redux
        const meTeams = await getUserTeams(authToken);
        if (meTeams.data) {
            setTeamList(meTeams.data);
        }
      } catch (error) {
        console.log("Error al obtener todos los proyectos", error);
      } finally {
        setIsLoading(false)
      }
    };
  
    const handleFilter = (type) => {
      if (type == "all-teams") {
        fetchAllTeams();
      }
      if (type == "my-teams") {
        fetchMeTeams();
      }
    };
  
    return (
        <>
        <div className="flex flex-row gap-2 mb-4 justify-center md:justify-end">
          <button
            onClick={() => handleFilter("all-teams")}
            type="button"
            className="inline-block rounded bg-secondary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary"
          >
            Equipos
          </button>
          <button
            onClick={() => handleFilter("my-teams")}
            type="button"
            className="inline-block rounded bg-secondary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary"
          >
            Mis equipos
          </button>
        </div>
        {/* IS LOADING */}
        {isLoading && <Loading />}
        {/* CARDS */}
        <div className="flex hover flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 justify-center">
        {teamList.map((team) => (
          <CardTeams
            key={team.id}
            name={team.name}
            users={team.users}
          />
        ))}
      </div>
      </>
  );
};

export default Teams;
