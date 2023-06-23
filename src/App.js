import Header, { HeaderPhone } from "./components/Header";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>

      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
