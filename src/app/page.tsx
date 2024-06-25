"use client";
import { Button } from "@nextui-org/button";

import { ThemeSwitcher } from "@/components/toggleTheme";
import { NavbarComponent } from "@/components/Navbar";

export default function Home() {
  // const toggleTheme = () => {
  //   document.getElementsByTagName("html")[0].classList.toggle("dark")
  // }
  return (
    <>
    <NavbarComponent></NavbarComponent>
      <main className=" h-full w-full flex flex-col items-center justify-center">
        <h1>Welcome to Rankify</h1>
        {/* <Button color="primary" onClick={() => {toggleTheme()}}>Get Started</Button> */}
        <ThemeSwitcher />
      </main>
    </>
  );
}
