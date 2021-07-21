import Image from "next/image";
import Portrait from "../public/portrait.jpg";
import DarkModeToggle from "./darkmodetoggle";

export default function NavBar(): JSX.Element {
  return (
    <div>
      <Image src={Portrait} alt="portrait" width={174} height={261} />
      <h1 className="dark:text-red-500">
        Matthieu O’Jeanson, Web and Mobile Applications Developer
      </h1>
      <DarkModeToggle />
    </div>
  );
}
