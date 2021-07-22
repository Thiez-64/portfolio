import Image from "next/image";
import Portrait from "../public/portrait.jpg";
import DarkModeToggle from "./darkmodetoggle";
import { useState } from "react";
import Link from "next/link";

export default function NavBar(): JSX.Element {
  const [isMenu, setIsMenu] = useState(false);
  const handleClick = () => {
    setIsMenu((previousState) => !previousState);
  };
  return (
    <div className="flex items-center w-full justify-around">
      <div className="w-14">
        <button onClick={handleClick}>
          <a>
            <Link href="/menupage" passHref>
              <Image
                src={Portrait}
                alt="portrait"
                width={174 / 2}
                height={261 / 2}
              />
            </Link>
          </a>
        </button>
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
