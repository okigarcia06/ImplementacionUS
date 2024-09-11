import React from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";

export default function NavBar() {
    return (
        <Navbar className="w-screen !justify-start sm:justify-center md:justify-center bg-hover shadow-sm">
        <NavbarBrand className="mx-10">
            <p className="text-2xl font-bold text-light">TANGO APP</p>
        </NavbarBrand>
        </Navbar>
    );
}
