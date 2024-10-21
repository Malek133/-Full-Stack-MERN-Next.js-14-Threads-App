// components/RightSidebar.tsx
import React from 'react'
import { Bell, MessageCircle } from 'lucide-react'

export function RightSidebar() {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-900 h-full border-l">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <ul className="space-y-2">
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell className="mr-2" size={18} />
            <span>New message received</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <MessageCircle className="mr-2" size={18} />
            <span>Meeting reminder</span>
          </li>
        </ul>
      </div>
    </aside>
  )
}