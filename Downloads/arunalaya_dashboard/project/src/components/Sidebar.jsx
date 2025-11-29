// import { Link, useLocation } from 'react-router-dom';
// import { LayoutDashboard, Plus, List } from 'lucide-react';

// function Sidebar() {
//   const location = useLocation();

//   const navItems = [
//     { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
//     { path: '/create', icon: Plus, label: 'Create Service' },
//     { path: '/services', icon: List, label: 'All Services' },
//   ];

//   return (
//     <div className="w-64 bg-[#181818] min-h-screen border-r border-gray-800 flex flex-col">
//       <div className="p-6 border-b border-gray-800">
//         <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
//       </div>

//       <nav className="flex-1 p-4">
//         <div className="space-y-2">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.path;

//             return (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                   isActive
//                     ? 'bg-[#f88310] text-white'
//                     : 'text-gray-400 hover:bg-gray-800 hover:text-white'
//                 }`}
//               >
//                 <Icon size={20} />
//                 <span className="font-medium">{item.label}</span>
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;
// import { Link, useLocation } from "react-router-dom";
// import { LayoutDashboard, Plus, List } from "lucide-react";
// import Logo from '../assets/bhang.png'
// function Sidebar() {
//   const location = useLocation();

//   const navItems = [
//     { path: "/", icon: LayoutDashboard, label: "Dashboard" },
//     { path: "/create", icon: Plus, label: "Create Service" },
//     { path: "/services", icon: List, label: "All Services" },
//   ];

//   return (
//     <aside className="w-64 bg-gradient-to-b from-[#1e1e1e] to-[#121212] border-r border-gray-800 min-h-screen flex flex-col shadow-lg shadow-black/30 relative">
//       {/* Logo Section */}
//       <div className="p-6 border-b border-gray-800 flex items-center justify-between">
//         <h1 className="text-2xl text-center font-bold text-white tracking-wide">
//          <span>
//           <img src={Logo} />
          
//           {/* <span className="text-[#f88310]">Arunalaya</span> */}
//           </span>
//         </h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-5 mt-4 space-y-2">
//         {navItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = location.pathname === item.path;

//           return (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium relative overflow-hidden ${
//                 isActive
//                   ? "bg-gradient-to-r from-[#f88310] to-[#ffae42] text-white shadow-md shadow-[#f88310]/40"
//                   : "text-gray-400 hover:text-white hover:bg-[#232323]"
//               }`}
//             >
//               <div
//                 className={`transition-transform duration-300 ${
//                   isActive ? "scale-110" : "group-hover:scale-110"
//                 }`}
//               >
//                 <Icon size={20} />
//               </div>
//               <span>{item.label}</span>

//               {/* Orange glow border when active */}
//               {isActive && (
//                 <span className="absolute left-0 top-0 h-full w-1 bg-[#f88310] rounded-r-lg" />
//               )}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Footer / Version Info */}
//       <div className="p-5 border-t border-gray-800 text-gray-500 text-sm text-center">
//         <p className="opacity-70">
//           © 2025 <span className="text-[#f88310]">Aayush</span> Admin
//         </p>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Plus, List, CalendarDays } from "lucide-react";
import Logo from '../assets/bhang.png';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/create", icon: Plus, label: "Create Service" },
    { path: "/services", icon: List, label: "All Services" },
    { path: "/bookings", icon: CalendarDays, label: "All Bookings" }, // ✅ New Bookings Button
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-[#1e1e1e] to-[#121212] border-r border-gray-800 min-h-screen flex flex-col shadow-lg shadow-black/30 relative">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-800 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
        {/* <h1 className="ml-3 text-2xl font-bold text-white">
          <span className="text-[#f88310]">Arunalaya</span>
        </h1> */}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-5 mt-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium relative overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-[#f88310] to-[#ffae42] text-white shadow-md shadow-[#f88310]/40"
                  : "text-gray-400 hover:text-white hover:bg-[#232323]"
              }`}
            >
              <div
                className={`transition-transform duration-300 ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                <Icon size={20} />
              </div>
              <span>{item.label}</span>

              {/* Orange glow border when active */}
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-[#f88310] rounded-r-lg" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Version Info */}
      <div className="p-5 border-t border-gray-800 text-gray-500 text-sm text-center">
        <p className="opacity-70">
          © 2025 <span className="text-[#f88310]">Aayush</span> Admin
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
