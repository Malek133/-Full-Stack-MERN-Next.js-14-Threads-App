// components/Sidebar.tsx
import React from 'react'
import Link from 'next/link'
import { Home, Users, Settings } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 h-full">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <Home className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/users" className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <Users className="mr-2" />
              Users
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <Settings className="mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}