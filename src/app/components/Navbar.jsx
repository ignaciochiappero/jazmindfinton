"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  // {
  //   title: "Podcast",
  //   path: "/podcast",
  // },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Detectar cambios de tamaño de ventana y cerrar el menú móvil si la pantalla es grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    // Escuchar eventos de cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Limpieza del efecto
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#ce85d6] bg-opacity-20 backdrop-blur-md">
      <div className="flex container lg:py-4 flex-wrap items-center max-sm:justify-start sm:justify-end mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded-full border-secondary-500 text-secondary-500 hover:text-secondary-600 hover:border-secondary-600 transition-all duration-300"
          >
            {/* Animación condicional entre Bars3Icon y XMarkIcon */}
            {!navbarOpen ? (
              <Bars3Icon className="h-5 w-5 transition-transform duration-300 transform rotate-0 scale-100" />
            ) : (
              <XMarkIcon className="h-5 w-5 transition-transform duration-300 transform rotate-180 scale-110" />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={() => setNavbarOpen(false)} // Pasando la función de cierre
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onLinkClick={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
