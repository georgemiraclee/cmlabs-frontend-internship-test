import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="px-4 md:px-8">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
