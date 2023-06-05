import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Homepage/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/redesign-web-kemenkes" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
