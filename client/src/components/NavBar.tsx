"use client";
import { ReactNode, useState, useEffect } from "react";
import { request } from "../utils/request";
import { useRouter } from "next/navigation";
import useLoading from "../hooks/useLoading";

const ListItem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <li className="flex flex-row justify-around items-center h-8">
      {children}
    </li>
  );
};

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { LoadingSwitch, load } = useLoading();
  const router = useRouter();
  const handleLogout = async () => {
    await load(request("/auth/logout", "GET"));
    router.push("/");
  };
  const openDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(true);
  };

  useEffect(() => {
    const closeDropdown = () => setIsDropdownOpen(false);
    if (isDropdownOpen) {
      document.addEventListener("click", closeDropdown, { once: true });
    }
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="w-64 max-w-64 h-full bg-slate-300 p-3 px-5 flex flex-col gap-3">
      <div className="rounded-md bg-slate-200">
        <ul>
          <ListItem>
            <div className="rounded-full bg-blue-400 w-5 h-5"></div>
            <span className="text-xs">John Doe</span>
            <span
              onClick={openDropdown}
              className="material-symbols-outlined text-sm hover:cursor-pointer hover:bg-slate-300 rounded-md px-1"
            >
              expand_all
            </span>
          </ListItem>
          {isDropdownOpen && (
            <>
              <div className=" border-t-slate-400 border"></div>
              <ListItem>
                <LoadingSwitch size="5">
                  <div
                    onClick={handleLogout}
                    className="text-xs w-5/6 h-4/5 flex justify-left px-2 items-center cursor-pointer hover:bg-slate-300 rounded-md"
                  >
                    Logout
                  </div>
                </LoadingSwitch>
              </ListItem>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
