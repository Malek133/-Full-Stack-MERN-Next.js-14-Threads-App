// components/Navbar.tsx
import React from 'react'
import { ModeToggle } from "./Toggel"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-bold">Your App Name</h1>
      <ModeToggle />
    </nav>
  )
}