import Link from 'next/link'
import { 
  LayoutDashboard, MessageSquare, Leaf, UserCheck, Clock, Briefcase, 
  PiggyBank, FileText, Wallet, Layers, Settings, LogOut
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', href: '/' },
  { icon: MessageSquare, text: 'Feedbacks', href: '/feedbacks' },
  { icon: Leaf, text: 'Leaves', href: '/leaves' },
  { icon: UserCheck, text: 'Attendance', href: '/attendance' },
  { icon: Clock, text: 'Daily Timesheet', href: '/timesheet' },
  { icon: Briefcase, text: 'Work Log', href: '/worklog' },
  { icon: PiggyBank, text: 'Reimbursements', href: '/reimbursements' },
  { icon: FileText, text: 'Reports', href: '/reports' },
  { icon: Wallet, text: 'My Expenses', href: '/expenses' },
  { icon: Layers, text: 'Categories', href: '/categories' },
  { icon: Settings, text: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      
      <nav className="flex-1 overflow-y-auto">
        <div className="p-4 bg-gray-100">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">My Options</h2>
        </div>
        <ul className="p-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                <item.icon className="w-5 h-5 mr-3" />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  )
}