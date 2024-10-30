import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
import AvatarUser from "../Common/AvatarUser";
// import { UserContext } from "../User/UserContext";
// import AvatarUser from "../Common/AvatarUser";

export default function OpenUser() {
  // const { userInfor } = useContext(UserContext);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md">
          <button
            type="button"
            className="flex text-sm  rounded-full md:me-0 bg-slate-300 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <div className="h-12 w-12 flex justify-center items-center">
              <AvatarUser />
            </div>
          </button>
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              to="user"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              user
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={"login"}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Sign out
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
