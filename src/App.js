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
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import "./App.css";
import { LinkTerkait } from "./Pages/LinkTerkait/LinkTerkait";
import { Page404 } from "./Pages/Page404";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  const titles = {
    "/": "Beranda",
    "/berita": "Berita",
    "/visi": "Visi dan Misi",
    "/tugas": "Tugas dan Fungsi",
    "/struktur": "Struktur",
    "/unit": "Unit Kerja dan Jabatan",
    "/peraturan": "Peraturan Perundangan",
    "/publikasi": "Publikasi",
    "/berita/1": "Berita",
    "/berita/2": "Berita",
    "/berita/3": "Berita",
    "/linkterkait": "Link Terkait",
  };

  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] ?? "Hello World";
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/berita" element={<Beritapage />} />
          <Route path="/unit" element={<Unit />} />
          <Route path="/visi" element={<Visi />} />
          <Route path="/tugas" element={<Tugas />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/berita">
            <Route path="1" element={<Detail index={1} />} />
            <Route path="2" element={<Detail index={2} />} />
            <Route path="3" element={<Detail index={3} />} />
          </Route>
          <Route path="/peraturan" element={<Peraturan />} />
          <Route path="/publikasi" element={<Publikasi />} />
          <Route path="/linkterkait" element={<LinkTerkait />} />
        </Routes>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
