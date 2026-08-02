import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && (
        <p className="text-gray-500">Nenhuma recomendação encontrada.</p>
      )}

      <ul className="space-y-3">
        {recommendations.map((recommendation, index) => (
          <li
            key={recommendation.id ?? index}
            className="mb-2 p-3 border border-gray-200 rounded-lg bg-gray-50"
          >
            <p className="font-semibold text-blue-700">{recommendation.name}</p>
            {recommendation.category && (
              <p className="text-sm text-gray-500 mt-1">
                Categoria: {recommendation.category}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
