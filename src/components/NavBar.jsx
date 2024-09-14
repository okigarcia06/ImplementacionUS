//Componente de Barra de arriba (header)
import React from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import logo from '../imagenes/delivazul.png'

export default function NavBar() {
    return (
        <Navbar className="w-screen !justify-start sm:justify-center md:justify-center bg-light shadow-sm">
        <NavbarBrand className="mx-10">
            <img src={logo} alt="" className="w-10 h-10 mr-2"/>
            <p className="text-2xl font-bold text-dark">TANGO APP</p>
        </NavbarBrand>
        </Navbar>
    );
}
