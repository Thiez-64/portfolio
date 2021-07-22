import Image from "next/image";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";

export default function FootBar() {
  return (
    <div className="flex items-center w-full justify-around bg-blue-700">
      <div className="w-1/12"></div>
      <div className="w-10/12 text-white justify-center flex">
        <h2>Matthieu O&apos;Jeanson</h2>
      </div>
      <div className="flex w-1/12">
        <div className="m-1">
          <Image src={github} alt="github" width={50} height={50} />
        </div>
        <div className="m-1">
          <Image src={linkedin} alt="linkedin" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
