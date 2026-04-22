import { Flame, LogIn } from "lucide-react"
import Link from "next/link"
import { NavbarLinks } from "./navbar-links"
import { NavbarMobileMenu } from "./navbar-menu-mobile"

export const NavbarUser = () => {
	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-background/85">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 p-4 sm:px-6 lg:px-8">
				<Link href="/" className="flex items-center gap-3">
					<span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
						<Flame className="size-5" />
					</span>
					<span className="flex flex-col text-sm">
						<span className="font-medium uppercase text-muted-foreground">No Mager</span>
						<span className="font-semibold text-foreground">Say No to Mager</span>
					</span>
				</Link>

				<NavbarLinks />

				<div className="flex gap-4">
					<div className="flex items-center gap-3">
						<Link href="/login" className="flex items-center gap-2 p-2 text-sm font-medium underline-offset-8 transition-all hover:underline text-muted-foreground hover:text-foreground">
							<LogIn className="size-4" />
							Login
						</Link>
					</div>
					<div className="lg:hidden">
						<NavbarMobileMenu />
					</div>
				</div>
			</div>
		</header>
	)
}
