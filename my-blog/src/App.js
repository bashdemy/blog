import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
              <Route path={"/"} exact element={<HomePage />} />
              <Route path={"/about"} element={<AboutPage />} />
              <Route path={"/articles-list"} exact element={<ArticlesListPage />} />
              <Route path={"/article/:name"} exact element={<ArticlePage />} />
              <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
