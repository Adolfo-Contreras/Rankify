"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { LuMoonStar } from "react-icons/lu";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleThemeMode = () => {
    setTheme(isSelected ? 'light' : 'dark');
    setIsSelected(!isSelected)
  };
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Switch
        isSelected={isSelected}
        onValueChange={toggleThemeMode}
        size="lg"
        color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <LuMoonStar className={className} />
          ) : (
            <FaRegSun className={className} />
          )
        }
      />
    </div>
  );
}
