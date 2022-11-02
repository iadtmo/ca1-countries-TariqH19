import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import CountryViewer from "./pages/CountryViewer";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryViewer />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
