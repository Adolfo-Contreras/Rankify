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
import { SlSocialSpotify } from "react-icons/sl";

export function NavbarComponent() {

  return (
    <Navbar>
        <NavbarBrand>
        <SlSocialSpotify size={32}/>
        </NavbarBrand>

        <NavbarContent>
            <NavbarItem>
                <Link href='/'>Home</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href='/login'>Login</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href='/Rankify'>DashBoard</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}