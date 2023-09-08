import { BgDesign } from "../organisms/BgDesign";
import { Footer } from "../organisms/Footer";
import { Navigation } from "../organisms/Navigation";

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
