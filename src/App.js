import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home/Home";
import { Beritapage } from "./Pages/Berita/Beritapage";
import { Visi } from "./Pages/VisiMisi/Visi";
import { Tugas } from "./Pages/Tugas/Tugas";
import { Struktur } from "./Pages/Struktur/Struktur";
import { Publikasi } from "./Pages/Publikasi/Publikasi";
import { Unit } from "./Pages/Unit/Unit";
import { Peraturan } from "./Pages/Peraturan/Peraturan";
import { Detail } from "./Pages/Berita/Detail";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berita" element={<Beritapage />} />
        <Route path="/unit" element={<Unit />} />
        <Route path="/visi" element={<Visi />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/berita/detail" element={<Detail />} />
        <Route path="/peraturan" element={<Peraturan />} />
        <Route path="/publikasi" element={<Publikasi />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
