import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";
import NavBar from "./NavBar";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Routes>
            <Route path={"/"} exact element={<HomePage />} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/articles-list"} exact element={<ArticlesList />} />
            <Route path={"/article"} exact element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
