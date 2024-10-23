import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ... (other imports)

const Sidebar = ({ expanded, setExpanded }) => {
  const pathname = usePathname();

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { id: 'products', icon: Box, label: 'Products', href: '/products' },
    { id: 'orders', icon: ShoppingCart, label: 'Orders', href: '/orders' },
    { id: 'customers', icon: Users, label: 'Customers', href: '/customers' },
    { id: 'analytics', icon: BarChart2, label: 'Analytics', href: '/analytics' },
    { id: 'payments', icon: CreditCard, label: 'Payments', href: '/payments' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', href: '/messages' },
    { id: 'settings', icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <div 
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        expanded ? 'w-64' : 'w-20'
      } z-50`}
    >
      {/* ... (other code) */}
      
      <div className="p-4">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.href}>
            <Button
              variant={pathname === item.href ? 'default' : 'ghost'}
              className={`w-full justify-start mb-2 ${
                expanded ? 'px-4' : 'px-2'
              } ${pathname === item.href ? 'bg-indigo-600 text-white hover:bg-indigo-700' : ''}`}
            >
              <item.icon className={`w-5 h-5 ${expanded ? 'mr-3' : ''}`} />
              {expanded && <span>{item.label}</span>}
            </Button>
          </Link>
        ))}
      </div>

      {/* ... (other code) */}
    </div>
  );
};

// ... (rest of the file)
