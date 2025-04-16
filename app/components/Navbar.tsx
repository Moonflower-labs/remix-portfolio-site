import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Home, Ellipsis, Clock, Briefcase, Wrench, Mail, BriefcaseBusiness } from "lucide-react";
import { href, NavLink, NavLinkProps, useLocation } from 'react-router';
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


interface LinkProps extends NavLinkProps {
  children: ReactNode;
}

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link = ({ to, children, ...props }: LinkProps) => {
  const { pathname } = useLocation();
  const isActive = to === pathname;

  return (
    <NavigationMenuLink asChild active={isActive}>
      <NavLink to={to}
        className={navigationMenuTriggerStyle()}
        {...props}>
        {children}
      </NavLink>
    </NavigationMenuLink>
  );
};

const MAINLINKS = [
  { to: href("/"), label: "Home", icon: <Home className="h-5 w-5" /> },
  { to: href("/about"), label: "About", icon: <Briefcase className="h-5 w-5" /> },
  { to: href("/services"), label: "Services", icon: <Wrench className="h-5 w-5" /> },
];

const DROPDOWNLINKS = [
  { to: href("/projects"), label: "Projects", icon: <BriefcaseBusiness className="h-5 w-5 text-inherit" /> },
  { to: href("/timeline"), label: "Timeline", icon: <Clock className="h-5 w-5 text-inherit" /> },
  { to: href("/contact"), label: "Contact Us", icon: <Mail className="h-5 w-5 text-inherit" /> },
];


const Navbar = () => {

  return (
    <div className="w-screen bg-background/70 sticky top-0 z-50 shadow backdrop-blur">
      <NavigationMenu className="mx-auto p-3 rounded-md ">
        <NavigationMenuList>
          <Avatar>
            <AvatarImage src="/flowerLogo.jpeg" />
          </Avatar>
          {MAINLINKS.map(link => (
            <NavigationMenuItem key={link.to} >
              <Link to={link.to}>
                <div className="text-inherit flex gap-1 items-center">
                  {link.icon} {link.label}
                </div>
              </Link>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="bg-white">
                  <Ellipsis className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" >
                {DROPDOWNLINKS.map(link => (
                  <DropdownMenuItem asChild key={link.to} >
                    <Link to={link.to}>
                      <div className="text-inherit flex gap-1 items-center">
                        {link.icon} {link.label}
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar