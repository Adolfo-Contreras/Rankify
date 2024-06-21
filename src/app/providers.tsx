"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
export function Providers({ children }: { children: React.ReactNode }) {
  const nav = useRouter();
  return (
  <NextUIProvider navigate={nav.push}>
    {children}
  </NextUIProvider>
)}
