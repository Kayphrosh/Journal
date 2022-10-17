import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import SubmissionContainer from "./pages/SubmitArticle/SubmissionContainer";
import EditorialContainer from "./pages/EditorialBoard/EditorialContainer";
import IssuesLandingPage from "./pages/Issues/Issues Landing Page/IssuesLandingPage";
import PublicationEthicsContainer from "./pages/Publication Ethics/PublicationEthicsContainer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submission" element={<SubmissionContainer />} />
        <Route path="/editors" element={<EditorialContainer />} />
        <Route path="/issues" element={<IssuesLandingPage />} />
        <Route path="/publication-ethics" element={<PublicationEthicsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
