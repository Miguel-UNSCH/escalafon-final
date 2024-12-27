"use client";

import * as React from "react";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeChange() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="border p-1 rounded-full flex gap-1">
      <Button
        variant={currentTheme === "light" ? "default" : "outline"}
        size="icon"
        onClick={() => setTheme("light")}
        className="rounded-full w-fit h-fit p-[2px]"
      >
        <Sun className="w-2 h-2"/>
      </Button>
      <Button
        variant={currentTheme === "dark" ? "default" : "outline"}
        size="icon"
        onClick={() => setTheme("dark")}
        className="rounded-full w-fit h-fit p-[2px]"
      >
        <Moon className="w-2 h-2" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme("system")}
        className="rounded-full w-fit h-fit p-[2px]"
      >
        <MonitorCog className="w-2 h-2" />
      </Button>
    </div>
  );
}