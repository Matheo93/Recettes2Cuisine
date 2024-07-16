import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Recipe Detail for {id}</h1>
      {/* Afficher les détails de la recette ici */}
    </div>
  );
};

export default RecipeDetail;
