import { FaSearch, FaFilter } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa"; // Replacing FaPlus with a calendar icon

export default function Searchbar() {
  return (
    <div className="flex items-center justify-end flex-wrap gap-4 mb-6">
      {/* Search Field */}
      <div className="flex flex-1 items-center rounded-md px-4 py-2 max-w-xl bg-white border shadow-sm cursor-pointer">
        <FaSearch className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 outline-none w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-md border bg-white hover:bg-gray-100 transition"
          title="Calendar"
        >
          <FaCalendarAlt className="w-4 h-4" />
        </button>

        <button
          className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-md border bg-white hover:bg-gray-100 transition"
          title="Filter"
        >
          <FaFilter className="w-4 h-4" />
        </button>
      </div>

      {/* Add New Story Button */}
      <button className="ml-3 bg-[#1C1442] cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2d2560] transition">
        Add New Story
      </button>
    </div>
  );
}
