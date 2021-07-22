import Menu from "../components/menu";

export default function MenuPage(): JSX.Element {
  return (
    <div className="background-header background-header ">
      <div className="z-50 w-full h-screen bg-blue-700 bg-opacity-70 flex justify-center items-center">
        <Menu />
      </div>
    </div>
  );
}
