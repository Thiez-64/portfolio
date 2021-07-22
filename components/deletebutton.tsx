import Image from "next/image";
import DeleteButtonPic from "/public/CrossButton.svg";

interface IProps {
  onClick: () => any;
}

export default function DeleteButton({ onClick }: IProps): JSX.Element {
  return (
    <div className="m-1">
      <button onClick={onClick}>
        <Image
          src={DeleteButtonPic}
          alt="editbutton"
          width={50 / 3}
          height={50 / 3}
        />
      </button>
    </div>
  );
}
