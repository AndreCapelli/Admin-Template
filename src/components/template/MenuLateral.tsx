import useAuth from "../../data/hook/useAuth";
import { IconDash, IconHome, IconLogout, IconSettings } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface MenuLateralProps {}

export default function MenuLateral(props) {
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col dark:bg-gray-900 dark:text-gray-200 bg-gray-200 text-gray-700">
      <div
        className={`flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Home" icone={IconHome} />
        <MenuItem url="/settings" texto="Settings" icone={IconSettings} />
        <MenuItem url="/notification" texto="Notification" icone={IconDash} />
      </ul>
      <ul className="">
        <MenuItem
          className={`text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:text-white`}
          onClick={logout}
          texto="Logout"
          icone={IconLogout}
        />
      </ul>
    </aside>
  );
}
