import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full  bg-gray-50 border border-gray-200 flex items-center h-14 fixed top-0 left-0 z-10">
      {/* Logo */}
      <div className="w-1/5 flex items-center px-4 border-r border-gray-300 h-full">
        <span className="text-xl font-semibold">MyApp</span>
      </div>

      {/* Right Section */}
      <div className="w-4/5 flex items-center justify-between h-full px-4">
        {/* Search Bar */}
        <div className="max-w-md w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-600"
          />
        </div>

        {/* Username */}
        <div className="flex items-center space-x-3">
          <div className="text-gray-700 font-medium">John Doe</div>
          <img
            src="https://ui-avatars.com/api/?name=John+Doe"
            alt="User Avatar"
            className="h-9 w-9 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
