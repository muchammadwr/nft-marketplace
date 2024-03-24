import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./pages/BestSellers/BestSellers";
import Products from "./pages/Products/Products";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BestSellers />
      <Products />
    </main>
  );
}
