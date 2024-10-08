import React from "react";
import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapse } from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapse,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-dark-bg">
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapse(!isSidebarCollapsed))}
          >
            <Menu className="h-8 w-8 cursor-pointer dark:text-white" />
          </button>
        )}

        <div className="relative flex h-min w-[200px]">
          <Search className="s-5 transtorm absolute left-1 top-1/2 mr-2 -translate-y-1/2 cursor-pointer dark:text-white" />
          <input
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={
            isDarkMode
              ? "rounded p-2 transition-colors dark:hover:bg-gray-700"
              : "rounded p-2 transition-colors hover:bg-gray-100"
          }
        >
          {isDarkMode ? (
            <Sun className="s-6 cursor-pointer dark:text-white" />
          ) : (
            <Moon className="s-6 cursor-pointer dark:text-white" />
          )}
        </button>
        <Link
          href="/settings"
          className={
            isDarkMode
              ? "h-mi w-min rounded p-2 transition-colors dark:hover:bg-gray-700"
              : "h-mi w-min rounded p-2 transition-colors hover:bg-gray-100"
          }
        >
          <Settings className="s-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
