import React from "react";

const Search = () => {
  return (
    <div class="relative">
      <input
        type="text"
        class="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Search"
      />
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg
          class="h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
