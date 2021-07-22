import Image from "next/image";
import Portrait from "../public/portrait.jpg";
import DarkModeToggle from "./darkmodetoggle";

export default function NavBar(): JSX.Element {
  return (
    <div className="flex items-center w-full justify-around">
      <div className="w-14">
        <Image src={Portrait} alt="portrait" width={174 / 2} height={261 / 2} />
      </div>
      <h1 className="dark:text-red-500">
        Matthieu O’Jeanson, Web and Mobile Applications Developer
      </h1>
      <div className="w-14">
        <DarkModeToggle />
      </div>
    </div>
  );
}
