"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession } from "@/app/(public)/_hooks/useSession";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import { navLinks } from "@/app/_components/Header/utils/navLinks";
import { useTheme } from "next-themes";
import { useSignOut } from "@/hooks/common/useSignOut";

export function Header() {
  const { data: loggedIn, isLoading } = useSession();
  const { mutateAsync: signOut } = useSignOut();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderLink = (
    link: { href: string; label: string; isButton?: boolean; onClick?: () => void },
    closeMenu?: () => void
  ) => {
    const handleClick = () => {
      if (closeMenu) closeMenu();
      if (link.onClick) link.onClick();
    };

    if (link.isButton) {
      return (
        <Button key={link.href} onClick={handleClick} className="transition-colors">
          {link.label}
        </Button>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={handleClick}
        className="transition-colors"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-primary">
          Pizzaria
        </Link>

        <nav className="hidden md:flex gap-6 font-medium items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="bg-transparent hover:bg-primary/50 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="text-primary" />
            ) : (
              <Moon className="text-primary" />
            )}
          </Button>

          {navLinks(loggedIn, isLoading, signOut).map((link) => renderLink(link))}
        </nav>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navegue pelo site</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-6 font-medium px-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="bg-transparent hover:bg-primary/20 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="text-primary" />
                ) : (
                  <Moon className="text-primary" />
                )}
              </Button>

              {navLinks(loggedIn, isLoading, signOut).map((link) =>
                renderLink(link, () => setIsSheetOpen(false))
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
