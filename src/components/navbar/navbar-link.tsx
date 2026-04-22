"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavbarLinkProps {
    href: string
    label: string
    active: boolean
    onNavigate?: () => void
}

export const NavbarLink = ({ href, label, active, onNavigate }: NavbarLinkProps) => {
    return (
        <Link
            href={href}
            onClick={onNavigate}
            className={cn(
                "inline-flex items-center px-1 py-2 text-sm font-medium underline-offset-8 transition-all hover:underline",
                active ? "text-primary underline" : "text-muted-foreground hover:text-foreground"
            )}
        >
            {label}
        </Link>
    )
}