import React from "react";
import articleContent from "./article-content";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
const ArticlePage = () => {

  const { name } = useParams();

  const otherArticles = articleContent.filter(article => article.name != name);

  const article = articleContent.find((article) => {
    return article.name == name;
  });

  if (!article) return <NotFoundPage />


  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => {
        return <p key={key}>{paragraph}</p>
      })}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles}></ArticlesList>
    </>

  );
};

export default ArticlePage;
