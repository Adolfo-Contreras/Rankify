"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import {ThemeProvider as DarkThemeProvider} from "next-themes";
export function Providers({ children }: { children: React.ReactNode }) {
  const nav = useRouter();
  return (
  <NextUIProvider navigate={nav.push}>
    <DarkThemeProvider attribute="class" defaultTheme="dark">
    {children}
    </DarkThemeProvider>
  </NextUIProvider>
)}
