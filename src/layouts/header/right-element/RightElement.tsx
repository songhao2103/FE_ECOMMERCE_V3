import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { useHeader } from "../constance";
import { IoMdClose } from "react-icons/io";
import ToggleSwitch from "../../../components/button/ToggleSwitch";
import { getLocalStorageData } from "../../../utils/local-storage/getData";
import {
  LOCAL_STORAGE_DEFAULT_VALUES,
  LOCAL_STORAGE_KEYS,
} from "../../../constances/localStorage";
import { useEffect, useState } from "react";
import { setLocalStorageData } from "../../../utils/local-storage/setData";

const RightElement = () => {
  //////////////////      STATES      //////////////////
  const { isMenuOpen, toggleMenuOpen, toggleInputSearchOpen } = useHeader();
  const [theme, setTheme] = useState<string>(
    getLocalStorageData(
      LOCAL_STORAGE_KEYS.THEME,
      LOCAL_STORAGE_DEFAULT_VALUES[LOCAL_STORAGE_KEYS.THEME]
    )
  );

  //////////////////      LOGICS      //////////////////
  useEffect(() => {
    const root = window.document.documentElement; // <html>

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  //////////////////      HANDLERS      //////////////////
  const handleToggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    setLocalStorageData(LOCAL_STORAGE_KEYS.THEME, nextTheme);
  };

  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center pr-1 lg:pr-6 sm:pr-3 gap-x-2">
        <IoSearchSharp
          className="text-sm cursor-pointer text-light hover:text-secondary lg:text-md xl:text-2xl"
          onClick={toggleInputSearchOpen}
        />
        <div
          onClick={toggleMenuOpen}
          className="h-[25px] w-[25px] bg-secondary flex items-center justify-center lg:hidden cursor-pointer shadow-sm"
        >
          {isMenuOpen ? <IoMdClose /> : <MdOutlineMenu />}
        </div>
      </div>

      <ToggleSwitch
        size="small"
        colorVariant="secondary"
        initialChecked={theme === "dark"}
        onToggle={handleToggleTheme}
      />
    </div>
  );
};

export default RightElement;
