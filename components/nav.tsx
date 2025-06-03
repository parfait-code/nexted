"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useScrollTo } from "@/hooks/useScrollTo";

export function Navigation() {
  const scrollTo = useScrollTo();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          Techrescue247
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            onClick={(e) => handleClick(e, "features")}
            className="text-sm hover:text-primary transition-colors duration-200"
          >
            Fonctionnalités
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => handleClick(e, "pricing")}
            className="text-sm hover:text-primary transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            onClick={(e) => handleClick(e, "testimonials")}
            className="text-sm hover:text-primary transition-colors duration-200"
          >
            Témoignages
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm hover:text-primary transition-colors duration-200"
          >
            Se connecter
          </Link>
          <Button asChild className="transition-colors duration-200">
            <Link href="#pricing" onClick={(e) => handleClick(e, "pricing")}>
              Commencer
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="transition-colors duration-200"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[350px] p-6">
            <SheetHeader className="border-b pb-6 mb-6">
              <SheetTitle className="text-left text-lg font-semibold">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  onClick={(e) => handleClick(e, "features")}
                  className="text-base hover:text-primary transition-colors duration-200 py-2 px-1"
                >
                  Fonctionnalités
                </Link>
                <Link
                  href="#pricing"
                  onClick={(e) => handleClick(e, "pricing")}
                  className="text-base hover:text-primary transition-colors duration-200 py-2 px-1"
                >
                  Pricing
                </Link>
                <Link
                  href="#testimonials"
                  onClick={(e) => handleClick(e, "testimonials")}
                  className="text-base hover:text-primary transition-colors duration-200 py-2 px-1"
                >
                  Témoignages
                </Link>
              </div>
              <div className="border-t pt-6 flex flex-col space-y-4">
                <Link
                  href="/login"
                  className="text-base hover:text-primary transition-colors duration-200 py-2 px-1"
                >
                  Se connecter
                </Link>
                <Button asChild className="w-full mt-2">
                  <Link
                    href="#pricing"
                    onClick={(e) => handleClick(e, "pricing")}
                  >
                    Commencer
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
