import { atom, selector } from "recoil";
import { useTheme } from "next-themes";

const darkState = atom({
  key: "darkState",
  default: false,
});

const menuState = atom({
  key: "menuState",
  default: false,
});

export { darkState, menuState };
