import React from "react";

interface Props {
    title: string;
    content: string;
    commentsQty: number; 
    tags: string[];
    category: Category; 
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    PY = "Python",
    OTHER = "Other"
}


const Destructuring = ({ title, content, commentsQty, tags, category }: Props) => {



  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Total de Comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
};

export default Destructuring;