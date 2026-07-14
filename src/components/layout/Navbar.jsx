import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
         {/* Logo */}
<a
  href="#home"
  className="flex items-center gap-3 shrink-0"
>
  <img
    src={logo}
    alt="AM Solutions Logo"
    className="h-12 w-12 object-contain"
  />

  <div className="leading-tight">
    <h1 className="text-sm text-slate-400">
      AM Software Solutions

    </h1>

    {/* <p className="text-sm text-slate-400">
      Software Solutions
    </p> */}
  </div>
</a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLinks />

            
          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>


        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden py-6 border-t border-white/10">

            <NavLinks className="flex flex-col gap-6" />

            

          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;