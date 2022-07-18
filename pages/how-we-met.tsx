import { NextPage } from "next";
import HowWeMetComponent from "../components/HowWeMEt";
import MetaComponent from "../components/Meta";

const HowWeMet: NextPage = () => {
  return (
    <>
      <MetaComponent title={`How We Met | CSTHEMOMENT`} />
      <HowWeMetComponent />
    </>
  );
};
export default HowWeMet;
