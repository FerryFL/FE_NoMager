"use client"
import { Flame, LogOut, Menu } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet"
import { NavbarLink } from "./navbar-link"
import { navItems } from "./constants"

export const NavbarMobileMenu = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            <Button
                variant="outline"
                size="icon"
                className="size-12 border-white/10 bg-white/5 lg:hidden"
                onClick={() => setOpen(true)}
                aria-label="Buka menu navigasi"
            >
                <Menu className="size-6" />
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="border-r border-white/10 bg-popover/95 backdrop-blur-2xl">
                    <SheetHeader className="border-b border-white/10 p-5">
                        <SheetTitle className="flex items-center gap-2 text-lg font-bold">
                            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                                <Flame className="size-5" />
                            </span>
                            NO MAGER
                        </SheetTitle>
                        <SheetDescription>Say No to Mager</SheetDescription>
                    </SheetHeader>

                    <div className="flex flex-col gap-2 p-5">
                        {navItems.map((item) => (
                            <NavbarLink
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                active={pathname === item.href}
                                onNavigate={() => setOpen(false)}
                            />
                        ))}
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-background/35 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
                        >
                            <LogOut className="size-4" />
                            Logout
                        </button>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}