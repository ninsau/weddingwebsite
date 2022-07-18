import type { NextPage } from "next";
import { HeroComponent } from "../components/Hero";
import MetaComponent from "../components/Meta";

const Home: NextPage = () => {
  return (
    <>
      <MetaComponent />
      <HeroComponent />
    </>
  );
};

export default Home;
