import {
  FiHome, FiUser, FiClipboard, FiGrid, FiBarChart2,
  FiFilm, FiSliders, FiBell, FiPackage, FiSettings,
  FiX, FiHelpCircle,
} from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onClose: () => void;
  toggleCollapse: () => void;
}

const navItems = [
  { label: 'Content', icon: <FiHome /> },
  { label: 'User', icon: <FiUser /> },
  { label: 'Task', icon: <FiClipboard /> },
  { label: 'App/Web', icon: <FiGrid /> },
  { label: 'Analytics', icon: <FiBarChart2 /> },
  { label: 'Media', icon: <FiFilm /> },
  { label: 'Customize', icon: <FiSliders /> },
  { label: 'Notifications', icon: <FiBell /> },
  { label: 'Subscription', icon: <FiPackage /> },
  { label: 'Settings', icon: <FiSettings /> },
];

export default function Sidebar({
  isOpen,
  isCollapsed,
  onClose,
  toggleCollapse,
}: SidebarProps) {
  return (
    <aside
      className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed lg:translate-x-0 transition-transform duration-300 ease-in-out
        ${isCollapsed ? 'lg:w-20' : 'lg:w-60'}
        w-60 h-full bg-white shadow-md z-50 lg:relative flex flex-col
      `}
    >
      {/* Mobile Close Button */}
      <div className="flex justify-between items-center border-b px-4 py-4 lg:hidden">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-black focus:outline-none"
          aria-label="Close Sidebar"
        >
          <FiX className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation with Top Gap */}
      <nav className="flex flex-col space-y-1 text-sm px-2 py-30">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            title={item.label}
            className={`flex items-center gap-3 px-4 py-2 rounded-md
              ${item.label === 'Content'
                ? 'bg-[#1c1036] text-white'
                : 'hover:bg-gray-100 text-gray-700'}
            `}
          >
            <span className="text-lg">{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </a>
        ))}
      </nav>

      {/* Contact Support and Collapse Button */}
      <div className="mt-auto px-4 py-2 flex justify-between items-center">
        <a
          href="#"
          className="flex items-center gap-2 text-sm bg-[#f1edff] text-purple-700 px-3 py-2 rounded-md hover:text-purple-900"
        >
          <FiHelpCircle className="text-lg" />
          {!isCollapsed && <span>Contact Support</span>}
        </a>
        <button
          onClick={toggleCollapse}
          className="hidden lg:block text-xs text-gray-500 cursor-pointer"
        >
          {isCollapsed ? '➤' : '◀'}
        </button>
      </div>
    </aside>
  );
}
