import type { NextPage } from "next";
import MenuComponent from "../components/Menu";
import MetaComponent from "../components/Meta";

const Menu: NextPage = () => {
  return (
    <>
      <MetaComponent title={`Menu | CSTHEMOMENT`} />
      <MenuComponent />
    </>
  );
};

export default Menu;
