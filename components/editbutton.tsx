import Image from "next/image";
import EditButtonPic from "/public/EditButton.svg";

interface IProps {
  onClick: () => any;
}

export default function EditButton({ onClick }: IProps): JSX.Element {
  return (
    <div className="m-1">
      <button onClick={onClick}>
        <Image
          src={EditButtonPic}
          alt="editbutton"
          width={50 / 3}
          height={50 / 3}
        />
      </button>
    </div>
  );
}
