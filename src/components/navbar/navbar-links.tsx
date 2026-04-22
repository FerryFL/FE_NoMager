"use client"
import { usePathname } from "next/navigation"
import { NavbarLink } from "./navbar-link"
import { navItems } from "./constants"

export const NavbarLinks = () => {
    const pathname = usePathname()

    return (
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            {navItems.map((item) => (
                <NavbarLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    active={pathname === item.href}
                />
            ))}
        </nav>
    )
}