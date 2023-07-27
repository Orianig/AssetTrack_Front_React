import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-4.png";

//ICONS
import { FaUser, FaPuzzlePiece, FaBoxes} from "react-icons/fa";
import { BsCalendarCheckFill } from "react-icons/bs"; 
import {
  RiArrowRightSLine,
  RiCloseLine,
  RiMenu3Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";


const Sidebar = () => {

    //controladores para los menus
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileSubmenu, setShowProfileSubmenu] = useState(false);
  const [showAssetsSubmenu, setShowAssetsSubmenu] = useState(false);
  const [showInventorySubmenu, setShowInventorySubmenu] = useState(false);


  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-primary p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <div className="mb-8">
            <img className="h-20 w-auto" src={Logo} alt="Company" />
          </div>
          <nav>
            {/* CALENDAR*/}
            <Link
              to="/personalArea"
              className="flex items-center gap-4 py-2 px-4 rounded-lg font-work-sans hover:bg-secondary-200 transition-colors"
              onClick={() => setShowMenu(false)}
            >
              <BsCalendarCheckFill className="iconsText" />
              Calendario
            </Link>
            {/* PROFILE*/}
            <button
              onClick={() => setShowProfileSubmenu(!showProfileSubmenu)}
              className="sidebarButton"
            >
              <span className="iconsComponent">
                <FaUser className="iconsText" /> Mi Espacio
              </span>
              <RiArrowRightSLine
                className={`mt-1 ${
                  showProfileSubmenu && "rotate-90"
                } transition-all`}
              />
            </button>
            <ul
              className={` ${
                showProfileSubmenu ? "h-[130px]" : "h-0"
              } overflow-y-hidden transition-all`}
            >
              <li>
                {/* USER PROFILE*/}
                <Link
                  to="/personalArea/profile"
                  className="sidebarComponent"
                >
                  Perfil
                </Link>
                {/* PROJECTS*/}
                <Link
                  to="/personalArea/userProject"
                  className="sidebarComponent"
                >
                  Proyectos
                </Link>
                {/* ASSETS RESERVATIONS*/}
                <Link
                  to="/personalArea/userAsset"
                  className="sidebarComponent"
                >
                  Reservas
                </Link>
              </li>
            </ul>
            {/* ASSETS*/}
            <button
              onClick={() => setShowAssetsSubmenu(!showAssetsSubmenu)}
              className="sidebarButton"
            >
              <span className="flex items-center gap-4 font-work-sans">
                <FaPuzzlePiece className="iconsText" /> Activos
              </span>
              <RiArrowRightSLine
                className={`mt-1 ${
                  showAssetsSubmenu && "rotate-90"
                } transition-all`}
              />
            </button>
            <ul
              className={` ${
                showAssetsSubmenu ? "h-[130px]" : "h-0"
              } overflow-y-hidden transition-all`}
            >
              <li>
                {/* RESERVATIONS*/}
                <Link
                  to="/personalArea/assets"
                  className="sidebarComponent"
                >
                  Reservas
                </Link>
                {/* ANALYTICS*/}
                <Link
                  to="/personalArea/assetsAnalytics"
                  className="sidebarComponent"
                >
                  Analisis de activos
                </Link>
                {/* ASSETS MANAGEMENT*/}
                <Link
                  to="/personalArea/assetsManagement"
                  className="sidebarComponent"
                >
                  Gestión de activos
                </Link>
              </li>
            </ul>
            {/* INVENTORY*/}
            <button
              onClick={() => setShowInventorySubmenu(!showInventorySubmenu)}
              className="sidebarButton"
            >
              <span className="flex items-center gap-4 font-work-sans">
                <FaBoxes className="iconsText" /> Inventario
              </span>
              <RiArrowRightSLine
                className={`mt-1 ${
                    showInventorySubmenu && "rotate-90"
                } transition-all`}
              />
            </button>
            <ul
              className={` ${
                showInventorySubmenu ? "h-[130px]" : "h-0"
              } overflow-y-hidden transition-all`}
            >
              <li>
                {/* RESERVATIONS*/}
                <Link
                  to="/personalArea/inventory"
                  className="sidebarComponent"
                >
                  Reservas
                </Link>
                {/* ANALYTICS*/}
                <Link
                  to="/personalArea/inventoryAnalytics"
                  className="sidebarComponent"
                >
                  Analisis de inventario
                </Link>
                {/* INVENTORY MANAGEMENT*/}
                <Link
                  to="/personalArea/inventoryManagement"
                  className="sidebarComponent"
                >
                  Gestión de inventario
                </Link>
                 {/* PRODUCTS*/}
                 <Link
                  to="/personalArea/products"
                  className="sidebarComponent"
                >
                  Productos
                </Link>
                 {/* PROVIDERS*/}
                 <Link
                  to="/personalArea/providers"
                  className="sidebarComponent"
                >
                  Proveedores
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <Link
            //   to="/login"
              className="flex items-center gap-4 font-work-sans py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors"
            //   onClick={handleLogout}
            >
              <RiLogoutCircleRLine className="iconsText" />
              Cerrar sesión
            </Link>
          </nav>
        </div>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
