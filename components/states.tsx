import { atom, selector } from "recoil";
import { useTheme } from "next-themes";

const darkState = atom({
  key: "darkState",
  default: false,
});

export { darkState };
