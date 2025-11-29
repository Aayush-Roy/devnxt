// function Navbar() {
//   return (
//     <div className="bg-[#181818] border-b border-gray-800 px-6 py-4">
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-semibold text-white">Service Management</h2>
//         <div className="flex items-center gap-4">
//           <div className="w-10 h-10 rounded-full bg-[#f88310] flex items-center justify-center text-white font-semibold">
//             A
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import { Bell, LogOut, Settings } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-[#1e1e1e]/90 backdrop-blur-md border-b border-gray-800 px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Left - Logo / Title */}
        <h2 className="text-2xl font-bold text-white tracking-wide">
          <span className="text-[#f88310]">Admin</span> Portal
        </h2>

        {/* Right - Icons + Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <button className="text-gray-400 hover:text-[#f88310] transition">
            <Bell size={22} />
          </button>

          {/* Settings Icon */}
          <button className="text-gray-400 hover:text-[#f88310] transition">
            <Settings size={22} />
          </button>

          {/* Profile Avatar */}
          <div className="relative group">
            <div className="w-10 h-10 rounded-full bg-[#f88310] flex items-center justify-center text-white font-semibold cursor-pointer">
              A
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-40 bg-[#232323] text-white rounded-lg shadow-lg border border-gray-700 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none group-hover:pointer-events-auto">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-[#2a2a2a] cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-[#2a2a2a] cursor-pointer flex items-center gap-2">
                  <LogOut size={16} /> Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
