import type { NextPage } from "next";
import Details from "../components/Details";
import MetaComponent from "../components/Meta";

const Event: NextPage = () => {
  return (
    <>
      <MetaComponent title={`Event Details | CSTHEMOMENT`} />
      <Details />
    </>
  );
};

export default Event;
