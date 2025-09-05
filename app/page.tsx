import AllComo from "./components/AllComo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./page.css";

export default function Home() {
  return (
    <div >
      <Navbar />
      <AllComo />
      <Footer />
    </div>
  );
}
