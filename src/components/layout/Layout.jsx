import { BgDesign } from "../BgDesign";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
      <Navigation />
      <BgDesign />
    </>
  );
};
