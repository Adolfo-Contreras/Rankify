import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { RiSpotifyLine } from "react-icons/ri";


export function NavbarComponent() {

  return (
    <Navbar>
        <NavbarBrand>
            <RiSpotifyLine/>
        </NavbarBrand>

        <NavbarContent>
            <NavbarItem>
                <Link href='/'>Home</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href='/login'>Login</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href='/dashboard'>DashBoard</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}