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
    <div className="flex items-center w-full justify-around bg-blue-700">
      <div className="w-1/12 rounded-full justify-center items-center m-1">
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
      <div className="w-10/12 text-white justify-center flex">
        <h1>Web and Mobile Applications Developer</h1>
      </div>
      <div className="w-1/12 items-center">
        <DarkModeToggle />
      </div>
    </div>
  );
}
