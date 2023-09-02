import { BgDesign } from "../BgDesign";
import { Header } from "../Header";
import { Navigation } from "../Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Navigation />
      <BgDesign />
    </>
  );
};
