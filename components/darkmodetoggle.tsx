import { useTheme } from "next-themes";

function DarkModeToggle(): JSX.Element {
  const { theme, setTheme } = useTheme();

  const handlDarkMode = () => {
    setTheme("");
  };

  return (
    <div className="bg-black flex items-center dark:bg-white h-6 w-12 shadow-buttonShadow rounded-full mt-2 px-1">
      <button
        type="button"
        className={`focus:outline-none rounded-full w-5 h-5 ${
          theme ? "bg-white ml-5" : "bg-white mr-5"
        }`}
        onClick={handlDarkMode}
      ></button>
    </div>
  );
}

export default DarkModeToggle;
