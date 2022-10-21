import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CounrtyCard from "./components/CountryCard";
import Footer from "./components/Footer";
import CounrtyViewer from "./pages/CountryViewer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CounrtyCard />} />
          <Route path="/countries:id" element={<CounrtyViewer />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
