import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";

const ROUTES = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Service",
    href: "/service",
  },
  {
    name: "Team",
    href: "/team",
  },
];

export const Header = () => {
  return (
    <header className="p-4 bg-white sticky top-0 w-full">
      <nav className="flex items-center justify-between container">
        <Link href={"/"}>
          <Logo className="w-[77px] h-auto" />
        </Link>
        <ul className="flex items-center gap-6">
          {ROUTES.map((route) => (
            <li key={route.name}>
              <Link href={route.href}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <Button variant="ghost">LOG IN</Button>
          <Button className="bg-brand">GET STARTED</Button>
        </div>
      </nav>
    </header>
  );
};
