"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#services", label: "SERVICES" },
  { href: "#projects", label: "PROJECTS" },
];

type NavbarProps = {
  title?: string;
};

const Navbar = ({title}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-sky-600/95 shadow-lg backdrop-blur-sm text-white font-sans">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
            window.history.pushState(null, '', '#home');
          }}
          className="flex items-center gap-3 text-base sm:text-lg font-semibold tracking-tight sm:tracking-wide cursor-pointer hover:opacity-80 transition"
        >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 overflow-hidden">
              <Image src="/logo.svg" alt="Tactronics logo" width={48} height={48} className="object-contain" />
            </span>
            <span className="text-base sm:text-lg leading-6">{title}</span>
          </a>
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm sm:text-base font-medium tracking-[0.02em]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = link.href.slice(1);
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  window.history.pushState(null, '', link.href);
                }}
                className="transition hover:text-gray-200 cursor-pointer text-sm sm:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 md:hidden"
        >
          {isOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden bg-sky-700/95 transition-[max-height] duration-300 ${isOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="space-y-1 border-t border-white/10 px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const sectionId = link.href.slice(1);
                const element = document.getElementById(sectionId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                window.history.pushState(null, '', link.href);
                setIsOpen(false);
              }}
              className="block rounded-xl px-4 py-3 text-base font-medium text-white tracking-[0.02em] transition hover:bg-white/10 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
