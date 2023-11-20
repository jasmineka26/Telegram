import { LockClosedIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div>
      <form className="flex items-center">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <input
            type="text"
            id="voice-search"
            className="bg-gray-600 border border-gray-600 text-gray-900 text-sm rounded-full block w-full p-2.5"
            placeholder="Search..."
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-5"
          >
            <LockClosedIcon className="w-6 h-6 text-gray-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
