import { GlobalStyle } from "./assets/styles/Styles"
import { Route, Routes } from "react-router-dom";
import Career from "./pages/careerRecommend/Career";
import Layout from "./components/layout/Layout";
import Landing from "./pages/landing/Landing";
import Vacancy from "./pages/vacancy/Vacancy";
import Aos from "aos";

function App() {
  Aos.init()
  
  return (
    <>
      <GlobalStyle />
      {/* <Pages/> */}
      <Routes>
        <Route path="/" element={<Layout content={<Landing />} />} />
        <Route path="karir" element={<Layout content={<Career />} />} />
        <Route path="lowongan" element={<Layout content={<Vacancy />} />} />
      </Routes>
    </>
  );
}

export default App;
