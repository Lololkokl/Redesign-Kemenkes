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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/redesign-web-kemenkes" element={<Home />} />
        <Route path="/redesign-web-kemenkes/berita" element={<Beritapage />} />
        <Route path="/redesign-web-kemenkes/unit" element={<Unit />} />
        <Route path="/redesign-web-kemenkes/visi" element={<Visi />} />
        <Route path="/redesign-web-kemenkes/tugas" element={<Tugas />} />
        <Route path="/redesign-web-kemenkes/struktur" element={<Struktur />} />
        <Route
          path="/redesign-web-kemenkes/berita/detail"
          element={<Detail />}
        />
        <Route
          path="/redesign-web-kemenkes/peraturan"
          element={<Peraturan />}
        />
        <Route
          path="/redesign-web-kemenkes/publikasi"
          element={<Publikasi />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
