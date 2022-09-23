import { GlobalStyle } from "./assets/styles/Styles"
import { Route, Routes } from "react-router-dom";
import Career from "./pages/careerRecommend/Career";
import Layout from "./components/layout/Layout";
import Landing from "./pages/landing/Landing";
import Vacancy from "./pages/vacancy/Vacancy";
import Aos from "aos";
import DetailVacancyMobile from "./pages/vacancy/DetailvacancyMobile";
import Quiz from "./pages/careerRecommend/Quiz";

function App() {
  Aos.init()
  
  return (
    <>
      <GlobalStyle />
      {/* <Pages/> */}
      <Routes>
        <Route path="/" element={<Layout content={<Landing />} />} />
        <Route path="karir" element={<Layout content={<Career />} />} />
        <Route path="karir/quiz" element={<Layout content={<Quiz />} />} />
        <Route path="lowongan" element={<Layout content={<Vacancy />} />} />
        <Route path="lowongan/:id" element={<Layout content={<DetailVacancyMobile />} />} />
      </Routes>
    </>
  );
}

export default App;
