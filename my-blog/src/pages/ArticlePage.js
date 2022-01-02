import React from "react";
import articleContent from "./article-content";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
const ArticlePage = () => {

  const { name } = useParams();

  const otherArticles = articleContent.filter(article => article.name != name);

  const article = articleContent.find((article) => {
    return article.name == name;
  });

  if (!article) return <h1>Article does not exist!</h1>


  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => {
        return <p key={key}>{paragraph}</p>
      })}
      <ArticlesList articles={otherArticles}></ArticlesList>
    </>

  );
};

export default ArticlePage;
