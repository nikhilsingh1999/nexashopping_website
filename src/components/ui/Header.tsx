"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle.tsx/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 md:px-8 bg-primary sticky top-0 z-50 w-full border-b border-amber-500 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="App Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-xl font-bold text-white sm:inline">
            NexaShopping
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Features
          </Link>
          <Link href="#categories" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Categories
          </Link>
          <Link href="#partnership" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Partnership
          </Link>
          <Link href="/terms" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Terms
          </Link>
          <Link href="/privacy-policy" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Privacy
          </Link>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button asChild className="rounded-xl hidden sm:flex">
            <Link href="#download">Download App</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-2 text-white">
          <Link href="/" className="block text-sm font-medium hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="#features" className="block text-sm font-medium hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Features
          </Link>
          <Link href="#categories" className="block text-sm font-medium hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Categories
          </Link>
          <Link href="#partnership" className="block text-sm font-medium hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Partnership
          </Link>
          <Link href="/terms" className="block text-sm font-medium hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Terms
          </Link>
          <Link href="/privacy-policy" className="block text-sm font-medium hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Privacy
          </Link>
          <Link
            href="#download"
            className="block text-sm font-semibold border border-white py-2 px-4 rounded-xl text-center hover:bg-white hover:text-black transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Download App
          </Link>
        </div>
      )}
    </header>
  );
}
